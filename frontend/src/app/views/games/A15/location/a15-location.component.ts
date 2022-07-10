import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionData } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-location.component.html',
  providers: [DestroyService]
})
export class A15LocationComponent extends SingleComponent implements OnInit {
  location: RegionData;

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private a15service: A15Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(route, seoService);
    this.gameService(this.a15service, 'locations');
  }
  ngOnInit(): void {
    this.location = this.route.snapshot.data.loc;
    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items in ${this.location.name}`);
    }
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(),
      takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.location.slugname}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 