import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Region } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-location.component.html',
  providers: [DestroyService]
})

export class A22LocationComponent extends SingleComponent implements OnInit {
  region: Region;
  dig = true;

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private router: Router,
    private a22service: A22Service,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(route, seoService);
    this.gameService(this.a22service, 'locations');
  }

  ngOnInit(): void {
    this.region = this.route.snapshot.data.loc;
    if (this.region.areas.length == 0 || !this.region) {
      this.error = `404`;
    }
    else {
      for (let g of this.region.areas[0].gatherdata) {
        if (g.tool == 'Dig') {
          this.dig = true;
          break;
        }
        this.dig = false;
      }
      this.genericSEO(this.region.name, `All items in ${this.region.name}`);
    }
  }

  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.region.slug}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }

  scrollTo(fragment): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
}