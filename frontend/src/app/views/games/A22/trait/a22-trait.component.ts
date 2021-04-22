import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Trait } from '@app/interfaces/a22';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
})
export class A22TraitComponent {

  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;

  @Input()
  slugname: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) { if(this.route.snapshot.params.trait != null) {
      this.slugname = this.route.snapshot.params.trait;
    }
  }

} 