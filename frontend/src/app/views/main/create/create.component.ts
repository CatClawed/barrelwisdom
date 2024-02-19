import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, SecurityContext, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EditBlog, Tag } from "@app/interfaces/blog";
import { Section } from '@app/interfaces/section';
import { User } from "@app/interfaces/user";
import { AuthenticationService } from "@app/services/authentication.service";
import { BlogService } from '@app/services/blog.service';
import { DestroyService } from '@app/services/destroy.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { SectionService } from '@app/services/section.service';
import { ErrorComponent } from '@app/views/_components/error/error.component';
import { environment } from '@environments/environment';
import { MarkdownComponent, MarkdownPipe, MarkdownService, provideMarkdown } from 'ngx-markdown';
import { Observable, of } from 'rxjs';
import { catchError, first, map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import slugify from 'slugify';

@Component({
  templateUrl: 'create.component.html',
  providers: [DestroyService, provideMarkdown({sanitize: SecurityContext.NONE})],
  standalone: true,
  imports: [ErrorComponent, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, RouterLink, MarkdownComponent, MarkdownPipe,
    CommonModule, MatChipsModule, MatAutocompleteModule]
})

export class CreateComponent {
  error: string = '';
  errorVars: any[];
  pageForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  user: User;
  blog: EditBlog;
  sectionIsBlog: boolean = false;
  preview: SafeHtml;
  currentTags: string[] = [];
  filteredTags: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  tagControl: UntypedFormControl;
  allTags: Tag[];
  tagList: string[] = [];
  tagIDList: number[] = [];
  sectionList: Section[] = [];
  blogID: number;
  currentTitle: string;
  editMode: boolean;
  disableSubmit: boolean = false;
  disableAuthorLock: boolean = false;
  section: string = "blog";

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private imgValidators = [
    Validators.pattern(environment.imageRegex + '.+\\.(png|jpg|webp)'),
    Validators.maxLength(255),
  ]

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private errorService: ErrorCodeService,
    private authenticationService: AuthenticationService,
    private markdownService: MarkdownService,
    private sectionService: SectionService,
    private BlogService: BlogService
  ) {
    slugify.extend({ "'": "-" })
    this.getTags();
    this.authenticationService.user
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => this.user = x);
    this.tagControl = new UntypedFormControl();

    this.pageForm = this.formBuilder.nonNullable.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', Validators.required],
      section: ['', Validators.required],
      seoDesc: ['', [Validators.required, Validators.maxLength(200)]],
      imgURL: ['', this.imgValidators],
      authorLock: [false],
      tags: this.tagControl
    });
  }

  ngOnInit() {
    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(null as Observable<string[]>),
      map((tag: string | null) => tag ? this._filter(tag) : this.tagList.slice()));

    if (this.route.snapshot.queryParamMap.get('id')) {
      this.currentTitle = "Edit Page";
      this.editMode = true;
    }
    else {
      this.currentTitle = "Create Page";
      this.editMode = false;
    }

    this.pageForm.get('section').valueChanges
      .pipe(takeUntil(this.destroy$))
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
        this.section = this.sectionList.find(obj => obj.id === +value).name
      }
      );

    this.pageForm.get('body').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.preview = this.markdownService.parse(this.customLink(<string>value));
      });

    this.getSections();
  }

  get f() { return this.pageForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (!this.disableSubmit || !this.pageForm.invalid) {
      this.loading = true;
      this.blogPost();
      this.loading = false;
    }
  }

  handleTags(data, idList) {
    data.forEach(tag => idList.push(tag.id))
    return idList
  }

  blogPost() {
    const slugtitle = this.slug(this.pageForm.get("title").value);
    const nextURL = this.sectionList.find(obj => obj.id === +this.pageForm.get("section").value).name
      + '/' + slugtitle;
    let authors = [];
    if (this.blog && this.editMode) {
      authors = this.blog.author;
      if (authors.indexOf(this.user.id) < 0) {
        // admins can edit authorlocked stuff but not get names added to list
        if (!this.pageForm.get("authorLock").value) {
          authors.push(this.user.id);
        }
      }
    }
    let idList = [];
    let newList = [];
    for (let tag of this.currentTags) {
      let index = this.tagList.indexOf(tag);
      if (index < 0) {
        newList.push({ name: tag, slugname: this.slug(tag) });
      }
      else {
        idList.push(this.tagIDList[index]);
      }
    }
    this.BlogService.addTags(newList)
      .pipe(first(),
        mergeMap(data => {
          idList = this.handleTags(data, idList)
          return this.BlogService.blogPost(
            this.pageForm.get("title").value,
            slugtitle,
            this.customLink(this.pageForm.get("body").value),
            this.pageForm.get("imgURL").value,
            this.pageForm.get("seoDesc").value,
            this.pageForm.get("authorLock").value,
            this.editMode ? authors : [this.user.id],
            this.pageForm.get("section").value,
            idList,
            this.editMode ? this.route.snapshot.queryParamMap.get('id') : undefined
          ).pipe(first())
        })
      )
      .subscribe(() => this.router.navigateByUrl(`/${nextURL}`));
  }

  // add to chip list
  add(event: MatChipInputEvent): void {
    const value = event.value;
    if ((value || '').trim()) {
      if (this.currentTags.indexOf(value.trim()) == -1 && value.trim().length <= 100) {
        this.currentTags.push(value.trim());
      }
    }
    event.chipInput!.clear();
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
    if (this.currentTags.indexOf(event.option.viewValue) == -1) {
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
    this.BlogService.getTags()
      .pipe(takeUntil(this.destroy$))
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
      .pipe(
        first(),
        switchMap(sections => {
          this.sectionList = sections;
          if (this.user.group !== 'admin' && this.user.group !== 'trusted') {
            this.sectionList = this.sectionList.filter(obj => obj.name !== 'blog')
          }
          this.blogID = this.sectionList.filter(obj => obj.name === 'blog')[0].id // gross
          return this.route.snapshot.queryParamMap.get('id') ? this.BlogService.getBlogByID(this.route.snapshot.queryParamMap.get('id')) : of(undefined)
            .pipe(first(),
              catchError(error => this.errorMsg = this.errorService.errorMessage(error)))
        })
      )
      .subscribe(blog =>
        this.setBlog(blog)
      );
  }

  setBlog(blog) {
    if (blog !== undefined) {
      this.blog = blog;
      // if the section is blog and you ain't trusted
      if (this.sectionList.filter(sec => sec.name === 'blog').length < 0 && this.blog.section === this.blogID) {
        this.errorMsg = "Not allowed to edit this.";
        this.disableSubmit = true;
      }

      // if the page is locked and you are either author or admin
      // or if the page is just not authorlocked
      else if (!this.blog.authorlock || (this.blog.authorlock && ((this.blog.author.indexOf(this.user.id) > -1) || this.user.group == 'admin'))) {
        this.pageForm.get('title').setValue(this.blog.title);
        this.pageForm.get('body').setValue(this.blog.body);
        this.pageForm.get('section').setValue(this.blog.section);
        this.pageForm.get('seoDesc').setValue(this.blog.description);
        this.pageForm.get('imgURL').setValue(this.blog.image);
        this.pageForm.get('authorLock').setValue(this.blog.authorlock);

        for (let tag of this.blog.tags) {
          let index = this.tagIDList.indexOf(tag);
          // if the tag is deleted from the database for whatever reason
          // there's no reason to keep it
          if (index != -1) {
            this.currentTags.push(this.tagList[index]);
          }
          this.sectionIsBlog = true;
        }
        if (this.blog.author.length > 1) { // we've established you're allowed to be here sooo
          this.disableAuthorLock = true;
        }

      }
      else {
        this.errorMsg = "Not allowed to edit this.";
        this.disableSubmit = true;
      }
    }
  }

  customLink(markdown: string): string {
    let section = this.section;

    return markdown.replace(/\[\[([^\]]+)\]\]/g, function (allPattern, link) {
      let text = link.replace(/\|([^\|]+)/, "").split("|")[0]
      let category = link.replace(/([^\|]+)\|/, "")
      let page = category.split('|')
      if (page.length > 1) {
        category = page[1]
        page = page[0];
      }
      else {
        page = text;
      }

      switch (category) {
        case "t":
          category = "traits"
          break;
        case "e":
          category = "effects"
          break;
        case "i":
          category = "items"
          break;
        case "b":
          category = "books"
          break;
        case "p":
          category = "properties"
          break;
      }

      link = slugify(page, {
        replacement: '-',
        remove: undefined,
        lower: true,
        strict: true,
        locale: 'en'
      });
      if (category != text) return `[${text}](/${section}/${category}/${link})`;
      return `[${text}](/${section}/${link})`;
    })
  }

  slug(title: string): string {
    return slugify(title, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true,
      locale: 'en'
    });
  }
}