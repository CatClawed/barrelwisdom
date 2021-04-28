import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Trait } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from '@app/services/errorcode.service';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
})
export class A22TraitComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  trait: Trait;
  colset: string;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private a22service: A22Service,
    private errorService: ErrorCodeService
    ) { if(this.route.snapshot.params.trait != null) {
      this.slugname = this.route.snapshot.params.trait;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a22service.getTrait(this.slugname, this.language)
    .subscribe(trait => {
      this.trait = trait;
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 