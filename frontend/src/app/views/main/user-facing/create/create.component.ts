import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from "@app/services/authentication.service";
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { Blog, EditBlog, Tag } from "@app/views/main/_interfaces/blog";
import { Section } from '@app/views/main/_interfaces/section';
import { User } from "@app/views/main/_interfaces/user";
import { ErrorCodeService } from "@app/views/main/_services/errorcode.service";
import { UserService } from '@app/views/main/_services/user.service';
import { environment } from '@environments/environment';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { forkJoin, Observable, of } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'create.component.html',
    providers: [DestroyService, provideMarkdown()],
    styleUrl: '../user-facing.scss',
    imports: [MatFormFieldModule, MatInputModule,
        ReactiveFormsModule, MarkdownComponent,
        CommonModule, MatChipsModule, MatAutocompleteModule]
})

export class CreateComponent {
  error: string = '';
  errorVars: any[];
  pageForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  errorMsg: string;
  user: User;
  sectionIsBlog: boolean = false;
  preview: SafeHtml;
  filteredTags: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagControl: UntypedFormControl;
  sectionList: Section[] = [];
  currentTitle: string;
  editMode: boolean;
  disableSubmit: boolean = false;
  disableAuthorLock: boolean = false;
  section: string;
  slug: string;
  data: any;
  blog: Blog;
  post: EditBlog = {title: '', body: '', image: '', desc: '', authorlock: undefined, author: [], section: undefined, closed: false, tags: undefined };
  allTags: string[];
  appliedTags: Tag[] = [];


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
    private breadcrumbService: BreadcrumbService,
    private userService: UserService) {
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
      closed: [false],
      tags: this.tagControl,
    });
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs([], undefined)
    if (this.route.snapshot.queryParamMap.get('slug') && this.route.snapshot.queryParamMap.get('section')) {
      this.slug = this.route.snapshot.queryParamMap.get('slug')
      this.section = this.route.snapshot.queryParamMap.get('section')
      this.currentTitle = "Edit Page";
      this.editMode = true;
    }
    else {
      this.currentTitle = "Create Page";
      this.editMode = false;
    }

    forkJoin({
      tags: this.userService.getTags(),
      sections: this.userService.getSections(),
      blog: this.slug && this.section ? this.userService.getBlog(this.slug, this.section) : of(null)
    }).subscribe(({tags, sections, blog}) => {
      this.allTags = tags.map(t => t.name);
      this.sectionList = sections;
      this.blog = blog;

      if (this.user.group !== 'admin' && this.user.group !== 'trusted') {
        this.sectionList = this.sectionList.filter(obj => obj.name !== 'blog');
      }

      if (this.blog) {
        if (this.canEditBlog(this.blog.authorlock,
            this.blog.author.includes(this.user.username),
            this.user.group,
            this.blog.section.slug)) {
              this.pageForm.patchValue({
                title: blog.title,
                body: blog.body,
                section: blog.section.slug,
                seoDesc: blog.desc,
                imgURL: blog.image,
                authorLock: blog.authorlock,
                closed: blog.closed,
              })
              this.appliedTags = blog.tags;

              if (blog.section.slug === 'blog') this.sectionIsBlog = true;
              if (this.blog.author.length > 1) this.disableAuthorLock = true;
        }
        else {
          this.errorMsg = "Not allowed to edit this.";
          this.disableSubmit = true;
        }
      }
    });


    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(null as Observable<string[]>),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));

    this.pageForm.get('section').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        if (value === 'blog') {
          this.pageForm.get('imgURL').setValidators(this.imgValidators.concat(Validators.required));
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = true;
        }
        else {
          this.pageForm.get('imgURL').setValidators(this.imgValidators);
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = false;
        }
        this.section = value;
      }
      );

    this.pageForm.get('body').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.preview = value;
      });
  }

  get f() { return this.pageForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (!this.disableSubmit || !this.pageForm.invalid) {
      this.loading = true;
      this.postBlog();
      this.loading = false;
    }
  }

  handleTags(data, idList) {
    data.forEach(tag => idList.push(tag.id))
    return idList
  }

  postBlog() {
    this.post.body       = this.pageForm.get("body").value
    this.post.title      = this.pageForm.get("title").value;
    this.post.authorlock = this.pageForm.get("authorLock").value;
    this.post.section    = this.pageForm.get("section").value;
    this.post.desc       = this.pageForm.get("seoDesc").value;
    this.post.image      = this.pageForm.get("imgURL").value;
    this.post.tags       = this.appliedTags;
    this.post.author     = this.blog ? this.blog.author : [];
    this.post.closed     = this.pageForm.get("closed").value;

    if (this.slug) {
      this.post.slug = this.slug;
    }
    if (!this.post.author.includes(this.user.username) && !this.post.authorlock) {
      this.post.author.push(this.user.username);
    }
    else if (this.post.authorlock && this.post.author.length == 0) {
      this.post.author.push(this.user.username);
    }
    this.userService.blogPost(this.post)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: blog => {
          this.router.navigateByUrl(`${blog.section.slug}/${blog.slug}`)
        },
        error: error => {
          console.error(error); // I'm leaving this because I can't be bothered
          this.errorMsg = this.errorService.errorMessage(error);
        }
      })

  }

  // add to chip list
  add(event: MatChipInputEvent): void {
    const value = event.value;
    if ((value || '').trim()) {
      if (this.appliedTags.filter(t => t.name === value.trim()).length === 0 && value.trim().length <= 100) {
        this.appliedTags.push({name: value});
      }
    }
    event.chipInput!.clear();
    this.tagControl.setValue(null);
  }

  // remove from chip list
  remove(tag: string): void {
    this.appliedTags = this.appliedTags.filter(t => t.name !== tag);
  }

  // selected from chip list
  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.appliedTags.filter(t => t.name === event.option.viewValue).length === 0) {
      this.appliedTags.push({name: event.option.viewValue});
    }
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  private canEditBlog(isLocked: boolean, isAuthor: boolean, group: string, section: string): boolean {
    const isAdmin = group === 'admin';
    const isTrusted = group === 'trusted';
    const sectionIsBlog = section === 'blog';

    if (isAdmin) return true;
    if (!isLocked && !sectionIsBlog) return true;
    if (!isLocked && isTrusted) return true;
    if (isAuthor) return true;

    return false;
  }
}
