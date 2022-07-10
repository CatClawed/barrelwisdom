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
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.brslservice, 'locations');
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.brslservice.getUnit(this.language)
      .subscribe({
        next: unit => {
          this.error = ``;
          this.units = unit;
          this.genericSEO(`Units`, `All crafting units in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 