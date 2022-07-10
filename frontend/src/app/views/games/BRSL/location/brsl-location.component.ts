import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Region } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-location.component.html',
  providers: [DestroyService]
})

export class BRSLLocationComponent extends SingleComponent implements OnInit {
  location: Region;

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private brslservice: BRSLService,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(route, seoService);
    this.gameService(this.brslservice, `locations`);
  }
  ngOnInit(): void {
    this.location = this.route.snapshot.data.loc;

    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items and demons in ${this.location.name}`);
    }
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/locations/${this.location.slug}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 