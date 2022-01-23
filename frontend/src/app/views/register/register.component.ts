import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { first } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'register.component.html',
  selector: 'register',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;
  code: string;
  hasInvite = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorCodeService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title
    ) {
     }

    ngOnInit() {
      // honestly I have no idea if I need this junk but I don't want this in search
      this.titleService.setTitle(`Register - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `noindex` },`name="robots"`);
      this.seoService.removeCanonicalURL();

      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          email: ['', [Validators.email, Validators.required]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      });

      if(this.route.snapshot.queryParamMap.get('invite')) {
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
        .pipe(first())
        .subscribe(() => {
              this.authenticationService.login(this.f.username.value, this.f.password.value)
                .subscribe(() => {
                  this.router.navigateByUrl('/');
                });
            },
            error => {
                this.loading = false;
                this.errorMsg = this.errorCodeService.errorMessage(error);
            });
  }
}