import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { DestroyService } from '@app/services/destroy.service';
import { ErrorCodeService } from '@app/views/main/_services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'login.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [ReactiveFormsModule, NgClass]
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  error: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private readonly destroy$: DestroyService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorCodeService: ErrorCodeService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private metaService: Meta,
    private titleService: Title
  ) { }

  ngOnInit() {
    // honestly I have no idea if I need this junk but I don't want this in search
    this.titleService.setTitle(`Login - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `noindex` }, `name="robots"`);
    this.seoService.removeCanonicalURL();
    this.breadcrumbService.setBreadcrumbs([], undefined)
    this.error = this.breadcrumbService.setStatus(200);

    this.loginForm = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(takeUntil(this.destroy$))
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