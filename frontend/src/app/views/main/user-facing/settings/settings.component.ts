import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { Meta, Title } from '@angular/platform-browser';
import { AuthenticationService } from "@app/services/authentication.service";
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ErrorCodeService } from '@app/views/main/_services/errorcode.service';
import { SettingService } from '@app/views/main/_services/setting.service';
import { environment } from '@environments/environment';
import { forkJoin, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  templateUrl: 'settings.component.html',
  providers: [DestroyService],
  styleUrl: '../user-facing.scss',
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule, MatMenuModule,
    MatSelectModule, AsyncPipe]
})
export class SettingsComponent {
  private formBuilder = inject(UntypedFormBuilder)
  private settingService = inject(SettingService)
  private errorCodeService = inject(ErrorCodeService)
  private authenticationService = inject(AuthenticationService)
  protected seoService = inject(SeoService)
  protected breadcrumbService = inject(BreadcrumbService)
  private metaService = inject(Meta)
  private titleService = inject(Title)
  private destroyRef = inject(DestroyRef)
  private cdr = inject(ChangeDetectorRef)

  currentSection: string = 'Section'
  loading = false;
  submitted = false;
  submittedPass = false;
  submittedSection = false;
  submittedNavigation = false;
  errorMsg: string;
  errorPass: string;
  errorInvite: string;
  errorSection: string;
  errorNavigation: string;
  successProfile = false;
  successPassword = false;
  successSection = false;
  successNavigation = false;
  user = this.authenticationService.userSignal;
  invite: string;

  passwordForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    newPass: ['', [Validators.required, Validators.minLength(8)]],
    repeatPass: ['', Validators.required],
    currentPass: ['', [Validators.required]],
  });

  profileForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    bio: ['', [Validators.maxLength(500)]],
    website: ['', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'), Validators.maxLength(200)]],
    avatar: ['', [Validators.pattern(environment.imageRegex + '.+\\.(png|jpg)'), Validators.maxLength(200)]],
  });

  sectionForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    slug: ['', [Validators.required, Validators.maxLength(30)]],
    name: ['', [Validators.required]]
  });

  navigationForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    nav: [],
    section: [''],
    data: ['', [Validators.required]]
  });

  data$ = forkJoin({
    sections: this.user().group == "admin" ? this.settingService.getSections() : null,
    profile: this.settingService.getProfile(this.user().id)
  }).pipe(
    tap(data => {
      this.profileForm.get('bio').setValue(data.profile.bio);
      this.profileForm.get('website').setValue(data.profile.website);
      this.profileForm.get('avatar').setValue(data.profile.avatar);
      this.loading = false;
    }),
    catchError(error => {
      this.loading = false;
      this.errorCodeService.errorMessage(error);
      return of(null)
    })
  )

  constructor() {
    this.seoService.removeCanonicalURL();
    this.titleService.setTitle(`Settings - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `noindex` }, `name="robots"`);
    this.breadcrumbService.setBreadcrumbs([], undefined)
    this.breadcrumbService.setStatus(200);
  }

  get profilef() { return this.profileForm.controls; }
  get passwordf() { return this.passwordForm.controls; }
  get sectionf() { return this.sectionForm.controls; }
  get navigationf() { return this.navigationForm.controls; }

  setLoadState(error?) {
    this.loading = false;
    if (error) {
      if (error.status === 400) {
        this.errorPass = "Invalid Password."
      }
      else {
        this.errorMsg = error ? this.errorCodeService.errorMessage(error) : "";
      }
    }
    this.cdr.markForCheck();
  }

  submitProfile() {
    this.submitted = true;
    this.successProfile = false;

    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    this.settingService.updateProfile(this.user().id, this.profilef.bio.value, this.profilef.website.value, this.profilef.avatar.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.successProfile = true;
          this.setLoadState()
        },
        error: error => {
          this.setLoadState(error)
        }
      });
  }

  submitPassword() {
    this.submittedPass = true;
    this.successPassword = false;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    this.loading = true;
    this.settingService.updatePassword(this.passwordf.newPass.value, this.passwordf.repeatPass.value, this.passwordf.currentPass.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.successPassword = true;
          this.setLoadState();
        },
        error: error => {
          this.setLoadState(error)
        }
      });
  }

  createInvite() {
    this.loading = true;

    this.settingService.createInvite()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next:
          data => {
            this.invite = `https://barrelwisdom.com/register?invite=${data['code']}`;
            this.setLoadState();
          },
        error: error => {
          this.setLoadState()
        }
      });
  }

  createSection() {
    this.submittedSection = true;
    this.successSection = false;

    // stop here if form is invalid
    if (this.sectionForm.invalid) {
      return;
    }

    this.loading = true;
    this.settingService.createSection(this.sectionf.slug.value, this.sectionf.name.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.successSection = true;
          this.setLoadState()
        },
        error: error => {
          this.setLoadState(error)
        }
      });
  }

  loadNav(section: string) {
    this.settingService.getNavigation(section)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(nav => {
        this.navigationForm.get('section').setValue(nav.section);
        this.navigationForm.get('data').setValue(nav.data);
        this.currentSection = nav.section;
      });
  }

  submitNav() {
    this.submittedNavigation = true;
    this.successNavigation = false;

    // stop here if form is invalid
    if (this.navigationForm.invalid) {
      return;
    }

    this.loading = true;
    this.settingService.updateNavigation(this.navigationf.section.value, this.navigationf.data.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.successNavigation = true;
          this.setLoadState();
        },
        error: error => {
          this.setLoadState(error)
        }
      });
  }
}