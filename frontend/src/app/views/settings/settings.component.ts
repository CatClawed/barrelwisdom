// Probably shoulda put all these in components for simpler repeated code, oh well

import { Component, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingService } from '@app/services/setting.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { first } from 'rxjs/operators';
import { User } from "@app/interfaces/user";
import { AuthenticationService } from "@app/services/authentication.service";
import { environment } from '@environments/environment';

@Component({
  templateUrl: 'settings.component.html',
})
export class SettingsComponent {
  emailForm: FormGroup;
  profileForm: FormGroup;
  passwordForm: FormGroup;
  loading = false;
  submitted = false;
  submittedEmail = false;
  submittedPass = false;
  returnUrl: string;
  errorMsg: string;
  erroEmail: string;
  errorPass: string;
  errorInvite: string;
  successEmail = false;
  successProfile = false;
  successPassword = false;
  user: User;
  invite: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private settingService: SettingService,
    private errorCodeService: ErrorCodeService,
    private authenticationService: AuthenticationService,
    ) {
      this.authenticationService.user.subscribe(x => this.user = x);
    }

    ngOnInit() {
      this.emailForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
      });

      this.passwordForm = this.formBuilder.group({
        newPass: ['', [Validators.required, Validators.minLength(8)]],
        repeatPass: ['', Validators.required],
        currentPass: ['', [Validators.required]],
    });

      this.profileForm = this.formBuilder.group({
        bio: ['', [Validators.maxLength(500)]],
        website: ['', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'), Validators.maxLength(200)]],
        avatar: ['', [Validators.pattern(environment.imageRegex + '.+\\.(png|jpg)'), Validators.maxLength(200)]],
    });

      this.loadProfile(this.user.id);

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get profilef() { return this.profileForm.controls; }
  get passwordf() { return this.passwordForm.controls; }
  get emailf() { return this.emailForm.controls; } // yes the function name is garbage

  loadProfile(id: number) {
    if(id != null) {
      this.settingService.getProfile(id)
      .subscribe(profile => {
        this.profileForm.get('bio').setValue(profile.bio);
        this.profileForm.get('website').setValue(profile.website);
        this.profileForm.get('avatar').setValue(profile.avatar);
        this.loading = false;
      },
        error => {
          this.loading = false;
          this.errorCodeService.errorMessage(error);
      });
    }
  }

  submitProfile() {
    this.submitted = true;
    this.successProfile = false;

    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    this.settingService.updateProfile(this.user.id, this.profilef.bio.value, this.profilef.website.value, this.profilef.avatar.value)
      .pipe(first())
      .subscribe(
        data => {
          this.successProfile = true;
          this.loading = false;
          this.errorMsg = "";
        },
        error => {
            this.loading = false;
            this.errorMsg = this.errorCodeService.errorMessage(error);
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
        .pipe(first())
        .subscribe(
            data => {
              this.successPassword = true;
              this.loading = false;
              this.errorPass = "";
            },
            error => {
                this.loading = false;
                if(error.status = 400) {
                  this.errorPass = "Invalid Password."
                }
                else {
                  this.errorPass = this.errorCodeService.errorMessage(error);
                }
            });
    }

  submitEmail() {
    this.submittedEmail = true;
    this.successEmail = false;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
        return;
    }

    this.loading = true;
    this.settingService.updateEmail(this.user.id, this.emailf.email.value)
        .pipe(first())
        .subscribe(
            data => {
              this.successEmail = true;
              this.loading = false;
              this.erroEmail = "";
            },
            error => {
                this.loading = false;
                this.erroEmail = this.errorCodeService.errorMessage(error);
            });
    }

    createInvite() {
      this.loading = true;

      this.settingService.createInvite()
          .pipe(first())
          .subscribe(
              data => {
                this.loading = false;
                this.invite = `https://barrelwisdom.com/register?invite=${data['code']}`;
                this.errorInvite = "";
              },
              error => {
                  this.loading = false;
                  this.errorInvite = this.errorCodeService.errorMessage(error);
              });
      }
}