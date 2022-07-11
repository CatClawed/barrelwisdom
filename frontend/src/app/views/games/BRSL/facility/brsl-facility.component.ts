import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { FacilityFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-facility.component.html',
  selector: 'brsl-facility',
})
export class BRSLFacilityComponent extends SingleComponent implements OnInit {
  facility: FacilityFull;
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private brslservice: BRSLService,) {
    super(route, seoService);
    this.gameService(this.brslservice, 'facilities');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.brslservice.getFacility(this.slug, this.language)
      .subscribe({
        next: facility => {
          this.error = ``;
          this.facility = facility;
          this.seoImage = `${this.imgURL}${this.section}/${this.facility.slug}.webp`;
          this.genericSEO(this.facility.name, this.facility.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 