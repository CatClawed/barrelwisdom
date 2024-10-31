import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { Area, GatherNode } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, Popover]
})

export class A23LocationComponent extends FragmentedComponent {
  filteredRegion: Area[];
  filteredNodes: GatherNode[];
  search: string = "";
  query: string = "";

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller,
    private formBuilder: UntypedFormBuilder,) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
    this.gameService(this.a23service, 'locations');
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a23service, 'locations');
    return this.a23service.getLocation(this.slug, this.language)
  }

  // TODO: See if I can work out something else for this inner subscribe.
  afterAssignment(): void {
    this.filteredRegion = this.data.areas
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
    // Chrome note: query second, not first. Firefox can handle either.
    // I am so mad.
    if (this.data.areas.length == 0 || !this.data) {
      this.error = `404`;
    }
    else {
      this.pageForm.get("filtertext").valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(filter => {
          this.filteredNodes = this.filterT(filter)
          this.search = filter;
        });
    }
    this.query = this.route.snapshot.queryParamMap.get('item');
    if (this.query) {
      this.pageForm.controls['filtertext'].patchValue(this.query);
    }
    else {
      this.pageForm.reset();
    }
  }

  private filterT(value: string): GatherNode[] {
    let nodeList: GatherNode[] = [];

    if (!value) {
      return nodeList;
    }
    const filterValue = value.toLowerCase();
    for (let area of this.data.areas) {
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