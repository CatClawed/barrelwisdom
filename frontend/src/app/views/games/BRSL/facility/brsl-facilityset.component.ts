import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilitySet, NameOnly } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-facilityset.component.html',
})

export class BRSLFacilitySetComponent extends SingleComponent implements OnInit {
  pageForm: FormGroup;
  facilityControl: FormControl;
  facilities: FacilitySet[];
  categories: NameOnly[];
  filteredSets: Observable<FacilitySet[]>;
  searchstring = "";

  constructor(
    private readonly destroy$: DestroyService,
    private formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private brslservice: BRSLService,
  ) {
    super(route, seoService);
    this.gameService(this.brslservice);
    this.facilityControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.facilityControl
    })
  }

  ngOnInit(): void {
    this.getFacilities();
    this.gameTitle = this.brslservice.gameTitle[this.language];
    this.gameURL = this.brslservice.gameURL;
    this.imgURL = this.brslservice.imgURL;
    this.seoURL = `${this.gameURL}/facilities/sets/${this.language}`;
    this.seoTitle = `Facility Sets - ${this.gameTitle}`;
    this.seoDesc = `The list of facility sets in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getFacilities() {
    this.brslservice.getFacilitySetList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: facilities => {
          this.facilities = facilities;
          this.filteredSets = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<FacilitySet[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.facilities.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): FacilitySet[] {
    let list: FacilitySet[] = this.facilities;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(set => {
      return set.effect.name.toLowerCase().includes(filterValue) || set.effect.desc.toLowerCase().includes(filterValue)
        || set.facilities.some(f => f.name.toLowerCase().includes(filterValue));
    });
  }

  get f() { return this.pageForm.controls; }

  identify(index, item) {
    return item.slug;
  }
}