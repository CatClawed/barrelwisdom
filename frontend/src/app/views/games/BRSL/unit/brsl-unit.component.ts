import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Unit } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-unit.component.html',
  selector: 'brsl-unit',
})
export class BRSLUnitComponent extends SingleComponent implements OnInit {
  units: Unit[];

  constructor(
    protected route: ActivatedRoute,
    private brslservice: BRSLService,
    private seoService: SeoService) {
    super(route);
    this.gameService(this.brslservice);
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.brslservice.getUnit(this.language)
      .subscribe({
        next: unit => {
          this.error = ``;
          this.units = unit;
          this.seoURL = `${this.gameURL}/units/${this.language}`;
          this.seoTitle = `Units - ${this.gameTitle}`;
          this.seoDesc = `All crafting units in ${this.gameTitle}.`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 