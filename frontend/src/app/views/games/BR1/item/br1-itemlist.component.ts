import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-itemlist.component.html',
  providers: [DestroyService]
})

export class BR1ItemlistComponent extends ListComponent implements OnInit {
  itemControl: FormControl;
  items: Item[];
  filteredItems: Observable<Item[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private br1service: BR1Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'items';
    this.itemControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.br1service);
    this.getItems();
    this.seoURL = `${this.gameURL}/items/${this.language}`;
    this.seoTitle = `Items - ${this.gameTitle}`;
    this.seoDesc = `The list of items in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getItems() {
    this.br1service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Item[] {
    let list: Item[] = this.items;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(item => {
        return item.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }

  identify(index, item) {
    return item.slugname;
  }
}