import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'login.component.html',
  selector: 'login',
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorCodeService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title
    ) { }

    ngOnInit() {
      // honestly I have no idea if I need this junk but I don't want this in search
      this.titleService.setTitle(`Login - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `noindex` },`name="robots"`);
      this.seoService.removeCanonicalURL();
      
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            () => {
              this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.loading = false;
                this.errorMsg = this.errorCodeService.errorMessage(error);
            });
    }
}