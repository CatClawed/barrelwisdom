import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { SeoService } from '@app/services/seo.service';
import { ErrorCodeService } from '@app/views/main/_services/errorcode.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  templateUrl: 'register.component.html',
  styleUrl: '../user-facing.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  private formBuilder = inject(UntypedFormBuilder)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private authenticationService = inject(AuthenticationService)
  private errorCodeService = inject(ErrorCodeService)
  protected seoService = inject(SeoService)
  protected breadcrumbService = inject(BreadcrumbService)
  private metaService = inject(Meta)
  private titleService = inject(Title)
  private destroyRef = inject(DestroyRef)

  registerForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  });
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  hasInvite = false;

  constructor() {
    this.titleService.setTitle(`Register - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `noindex` }, `name="robots"`);
    this.seoService.removeCanonicalURL();
    this.breadcrumbService.setBreadcrumbs([], undefined)

    if (this.route.snapshot.queryParamMap.get('invite')) {
      this.hasInvite = true;
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.register(
      this.f.username.value,
      this.f.email.value,
      this.f.password.value,
      this.f.confirmPassword.value,
      this.route.snapshot.queryParamMap.get('invite'))
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        mergeMap(() => {
          return this.authenticationService.login(this.f.username.value, this.f.password.value)
        })
      )
      .subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: error => {
          this.loading = false;
          this.errorMsg = this.errorCodeService.errorMessage(error);
        }
      });
  }
}