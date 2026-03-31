import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { SeoService } from '@app/services/seo.service';
import { ErrorCodeService } from '@app/views/main/_services/errorcode.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrl: '../user-facing.scss',
  imports: [ReactiveFormsModule, NgClass]
})
export class LoginComponent {
  private formBuilder = inject(UntypedFormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private errorCodeService = inject(ErrorCodeService);
  private seoService = inject(SeoService);
  private breadcrumbService = inject(BreadcrumbService);
  private metaService = inject(Meta);
  private titleService = inject(Title);
  private destroyRef = inject(DestroyRef);

  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  user = this.authenticationService.userSignal;

  loginForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor() {
    this.titleService.setTitle(`Login - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `noindex` }, `name="robots"`);
    this.seoService.removeCanonicalURL();
    this.breadcrumbService.setBreadcrumbs([], undefined)
    this.breadcrumbService.setStatus(200);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.router.navigateByUrl(this.returnUrl);
        },
        error: error => {
          this.loading = false;
          this.errorMsg = this.errorCodeService.errorMessage(error);
        }
      });
  }
}