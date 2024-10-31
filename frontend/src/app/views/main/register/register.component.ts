import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { DestroyService } from '@app/services/destroy.service';
import { ErrorCodeService } from '@app/views/main/_services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'register.component.html',
  selector: 'register',
  providers: [DestroyService],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  registerForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  code: string;
  hasInvite = false;

  constructor(
    private readonly destroy$: DestroyService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorCodeService: ErrorCodeService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private metaService: Meta,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    // honestly I have no idea if I need this junk but I don't want this in search
    this.titleService.setTitle(`Register - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `noindex` }, `name="robots"`);
    this.seoService.removeCanonicalURL();
    this.breadcrumbService.setBreadcrumbs([], undefined)

    this.registerForm = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });

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
    this.authenticationService.register(this.f.username.value, this.f.email.value, this.f.password.value, this.f.confirmPassword.value, this.route.snapshot.queryParamMap.get('invite'))
      .pipe(
        mergeMap(() => {
          return this.authenticationService.login(this.f.username.value, this.f.password.value)
        }),
        takeUntil(this.destroy$)
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