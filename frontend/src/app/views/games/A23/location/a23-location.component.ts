import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Area, GatherNode, Region } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-location.component.html',
  providers: [DestroyService]
})

export class A23LocationComponent extends FragmentedComponent {
  region: Region;
  filteredRegion: Area[];
  filteredNodes: GatherNode[];
  search: string = "";
  query: string = "";

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller,
    private formBuilder: UntypedFormBuilder,) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.gameService(this.a23service, 'locations');
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
    this.region = this.route.snapshot.data.loc;
    this.filteredRegion = this.region.areas;
    this.query = this.route.snapshot.queryParamMap.get('item');
    if (this.region.areas.length == 0 || !this.region) {
      this.error = `404`;
    }
    else {
      this.pageForm.get("filtertext").valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(filter => {
          this.filteredNodes = this.filterT(filter)
          this.search = filter;
        }
        );
      if (this.query) { this.pageForm.controls['filtertext'].patchValue(this.query); }
    }
  }

  changeData(): void {
    this.a23service.getLocation(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: region => {
          this.query = this.route.snapshot.queryParamMap.get('item');
          if (this.query) {
            this.pageForm.controls['filtertext'].patchValue(this.query);
          }
          else {
            this.pageForm.reset();
          }
          this.region = region;
          this.filteredRegion = this.region.areas;
          if (this.region.areas.length == 0 || !this.region) {
            this.error = `404`;
          }
          else {
            this.error = ``;
          }
          this.gameService(this.a23service, 'locations');
          this.genericSEO(this.region.name, `All items in ${this.region.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): GatherNode[] {
    let nodeList: GatherNode[] = [];

    if (!value) {
      return nodeList;
    }
    const filterValue = value.toLowerCase();
    for (let area of this.region.areas) {
      for (let climate of area.climate) {
        for (let node of climate.nodes) {
          if (node.items.some(item => item.name.toLowerCase().includes(filterValue))) {
            nodeList.push(node)
          }
        }
      }
    }
    return nodeList;
  }

  validNode(node: GatherNode): boolean {
    if (this.search.length === 0) return true;
    if (this.filteredNodes.indexOf(node) > -1) return true;
    return false;
  }
}