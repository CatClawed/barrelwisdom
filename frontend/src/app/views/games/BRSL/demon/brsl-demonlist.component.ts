import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { DemonList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-demonlist.component.html',
  providers: [DestroyService]
})

export class BRSLDemonlistComponent extends ListComponent implements OnInit {
  demons: DemonList[];
  filteredDemons: Observable<DemonList[]>;
  demonControl: FormControl;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private brslservice: BRSLService,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'demons';
    this.demonControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.demonControl
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.brslservice);
    this.getDemons();
    this.seoURL = `${this.gameURL}/demons/${this.language}`;
    this.seoTitle = `Demons - ${this.gameTitle}`;
    this.seoDesc = `The list of demons in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getDemons() {
    this.brslservice.getDemonList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: demons => {
          this.demons = demons.slice(0, 103);
          this.filteredDemons = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<DemonList[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.demons.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): DemonList[] {
    let list: DemonList[] = this.demons;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}