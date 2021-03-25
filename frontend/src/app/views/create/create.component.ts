import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { AuthenticationService } from "@app/services/authentication.service";
import { User } from "@app/interfaces/user";
import { Blog } from "@app/interfaces/blog";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { MarkdownService } from 'ngx-markdown';
import { COMMA, ENTER}  from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tag } from '@app/interfaces/tag';
import { TagService } from '@app/services/tag.service';
import { Section } from '@app/interfaces/section';
import { SectionService } from '@app/services/section.service';
import { BlogService } from '@app/services/blog.service';
import slugify from 'slugify';

@Component({
  templateUrl: 'create.component.html'
})


export class CreateComponent {
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  pageForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  user: User;
  blog: Blog;
  sectionIsBlog: boolean = false;
  preview: SafeHtml;
  currentTags: string[] = [];
  filteredTags: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  tagControl: FormControl;
  allTags: Tag[];
  tagList: string[] =  [];
  tagIDList: number[] =  [];
  sectionList: Section[] = [];
  sectionIDList: number[] = [];
  blogID: number;
  currentTitle: string;
  editMode: boolean;
  disableSubmit: boolean = false;
  disableAuthorLock: boolean = false;
  slugtitle = "";
  
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private imgValidators = [
    Validators.pattern(environment.imageRegex + '.+\\.(png|jpg)'),
    Validators.maxLength(255),
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private errorService: ErrorCodeService,
    private authenticationService: AuthenticationService,
    private sanitized: DomSanitizer,
    private markdownService: MarkdownService,
    private tagService: TagService,
    private sectionService: SectionService,
    private BlogService: BlogService
  ) {
    this.getTags();
    this.authenticationService.user.subscribe(x => this.user = x);
    this.tagControl = new FormControl();
    

    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(null as Observable<string[]>),
      map((tag: string | null) => tag ? this._filter(tag) : this.tagList.slice()));

      if(this.route.snapshot.queryParamMap.get('id')) {
        this.currentTitle = "Edit Page";
        this.editMode = true;
      }
      else {
        this.currentTitle = "Create Page";
        this.editMode = false;
      }
  }

  ngOnInit() {

      this.pageForm = this.formBuilder.group({
        title: ['', [Validators.required, Validators.maxLength(100)]],
        body: ['', Validators.required],
        section: ['', Validators.required],
        seoDesc: ['', [Validators.required, Validators.maxLength(200)]],
        imgURL: ['', this.imgValidators],
        authorLock: [false],
        tags: this.tagControl
      });

    this.pageForm.get('section').valueChanges
      .subscribe(value => {
        if (value == this.blogID) {
          this.pageForm.get('imgURL').setValidators(this.imgValidators.concat(Validators.required));
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = true;
        }
        else {
          this.pageForm.get('imgURL').setValidators(this.imgValidators);
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = false;
        }
      }
      );

      this.pageForm.get('body').valueChanges
        .subscribe(value => {
          this.preview = this.markdownService.compile(<string>value); 
        });

        this.getSections();
  }

  get f() { return this.pageForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.disableSubmit) {
      return;
    }

    if (this.pageForm.invalid) {
      return;
    }

    this.loading = true;
    
    // push new tags to database first, plop their IDs into a list
    let idList = []
    for (let tag of this.currentTags) {
      let index = this.tagList.indexOf(tag);
      if(index < 0) {
        this.tagService.addTag(tag)
          .subscribe(data => {
            idList.push(data.id);
          },
          error => {
            this.loading = false;
            this.errorMsg = this.errorService.errorMessage(error);
            return;
          }
          );
      }
      else {
        idList.push(this.tagIDList[index]);
      }
    }
    if(!this.editMode) {
      let slugtitle = this.sectionList[this.sectionIDList.indexOf(this.pageForm.get("section").value)].name
          + '/' + this.slug(this.pageForm.get("title").value);

      this.BlogService.createBlog(this.pageForm.get("title").value,
        slugtitle,
        this.pageForm.get("body").value,
        this.pageForm.get("imgURL").value,
        this.pageForm.get("seoDesc").value,
        this.pageForm.get("authorLock").value,
        [this.user.id],
        this.pageForm.get("section").value,
        idList // tags
        )
        .subscribe(data => {
          this.router.navigateByUrl(`/${slugtitle}`);
        },
        error => {
          this.loading = false;
          this.errorMsg = this.errorService.errorMessage(error);
          return;
        }
        );
    }
    else {
      if(this.blog) {
        let authors = this.blog.author;
        if(authors.indexOf(this.user.id) < 0) {
          // admins can edit authorlocked stuff but not get names added to list
          if(!this.pageForm.get("authorLock").value) {
            authors.push(this.user.id);
          }
        }
        let slugtitle = this.sectionList[this.sectionIDList.indexOf(this.pageForm.get("section").value)].name
          + '/' + this.slug(this.pageForm.get("title").value);

        this.BlogService.updateBlog(this.route.snapshot.queryParamMap.get('id'),
          this.pageForm.get("title").value,
          slugtitle,
          this.pageForm.get("body").value,
          this.pageForm.get("imgURL").value,
          this.pageForm.get("seoDesc").value,
          this.pageForm.get("authorLock").value,
          authors,
          this.pageForm.get("section").value,
          idList // tags
          )
          .subscribe(data => {
            this.router.navigateByUrl(`/${slugtitle}`);
          },
          error => {
            this.loading = false;
            this.errorMsg = this.errorService.errorMessage(error);
            return;
          }
          );
      }
    }
    
    this.loading = false;
  }

  // add to chip list
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if(this.currentTags.indexOf(value.trim()) == -1 && value.trim().length <= 100)  {
        this.currentTags.push(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagControl.setValue(null);
  }

  // remove from chip list
  remove(tag: string): void {
    const index = this.currentTags.indexOf(tag);

    if (index >= 0) {
      this.currentTags.splice(index, 1);
    }
  }

  // selected from chip list
  selected(event: MatAutocompleteSelectedEvent): void {

    if(this.currentTags.indexOf(event.option.viewValue) == -1) {
      this.currentTags.push(event.option.viewValue);
    }
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tagList.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  } 

  // get all the tags
  getTags(): void {
    this.tagService.getTags()
      .subscribe(tags => {
          this.allTags = tags;
          this.allTags.forEach(tag => {
            this.tagList.push(tag.name);
            this.tagIDList.push(tag.id);
          });
        }
        );
  }

  // get the sections that apply to the user group
   getSections() {
    this.sectionService.getSections()
      .subscribe((sections) => {
        sections.forEach(section => {
          if (section.name == 'blog') {
            if (this.user.group == 'admin' || this.user.group == 'trusted') {
              this.sectionList.push(section);
              this.sectionIDList.push(section.id);
            }
            this.blogID = section.id;
          }
          else {
            this.sectionList.push(section);
            this.sectionIDList.push(section.id);
          }
        });
        this.loadBlog(this.route.snapshot.queryParamMap.get('id')); // gotta do this after anyway...
      });
  }

  loadBlog(id: string) {
    if(id != null) {
      this.BlogService.getBlogByID(id)
      .subscribe(blog => {
        this.blog = blog;

        // if the section is blog and you ain't trusted
        if(this.sectionIDList.indexOf(this.blog.section) < 0) {
          this.errorMsg = "Not allowed to edit this.";
          this.disableSubmit = true;
          return;
        }

        // if the page is locked and you are either author or admin
        // or if the page is just not authorlocked
        if(!this.blog.authorlock || (this.blog.authorlock && ((this.blog.author.indexOf(this.user.id) > -1) || this.user.group == 'admin'))) {
          this.pageForm.get('title').setValue(this.blog.title);
          this.pageForm.get('body').setValue(this.blog.body);
          this.pageForm.get('section').setValue(this.blog.section);
          this.pageForm.get('seoDesc').setValue(this.blog.description);
          this.pageForm.get('imgURL').setValue(this.blog.imgurl);
          this.pageForm.get('authorLock').setValue(this.blog.authorlock);

          for(let tag of this.blog.tags) {
            let index = this.tagIDList.indexOf(tag);
            // if the tag is deleted from the database for whatever reason
            // there's no reason to keep it
            if(index != -1) {
              this.currentTags.push(this.tagList[index]);
            }
            this.sectionIsBlog = true;
          }
          if(this.blog.author.length > 1) { // we've established you're allowed to be here sooo
            this.disableAuthorLock = true;
          }
          
       }
       else {
        this.errorMsg = "Not allowed to edit this.";
        this.disableSubmit = true;
        return;
       }
      },
        error => {
          this.errorMsg = this.errorService.errorMessage(error);
        }
      );
      return;
    }
  }

  slug(title: string) {
    return slugify(title, { 
      replacement: '-', 
      remove: undefined,
      lower: true,
      strict: false,
      locale: 'en'
    });
  }
}