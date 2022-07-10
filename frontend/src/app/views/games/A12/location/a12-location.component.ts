import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { AreaData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-location.component.html',
  providers: [DestroyService]
})
export class A12LocationComponent extends SingleComponent implements OnInit {
  location: AreaData;

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private a12service: A12Service,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(route, seoService);
    this.gameService(this.a12service, 'locations');
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
      takeUntil(this.destroy$),
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.location.slugname}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 