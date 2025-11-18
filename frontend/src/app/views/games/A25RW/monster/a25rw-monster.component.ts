import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25rw-monster.component.html',
    selector: 'a25rw-monster',
    providers: [DestroyService],
    imports: [...CommonImports],
    encapsulation: ViewEncapsulation.None,
    styles: [
      `.a25-half-star {
        display:inline-block;
        overflow-x:clip;
        width:3vw;
        color: gold;
        -webkit-text-stroke: 0.1rem black;
      }
      .a25rw-attribute {
        display: flex;
        align-items: center;
        margin-top:1em;
        div {
          display:flex;

        }
        svg {
          width:1.8em;
          height:1.8em;
          fill:white;
          margin:auto;
        }
      }
      .a25rw-element {
        border-radius:50%;
        width:2.5em;
        height:2.5em;
        margin-right: 0.5em;
      }
      .a25rw-ailment {
        background-color: #c43121;
        transform: rotate(45deg);
        width:2.1em;
        height:2.1em;
        margin-left:0.2em;
        margin-right: 0.7em;
        svg {
          transform: rotate(-45deg);
        }
      }
      `
    ]
})
export class A25RWMonsterComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25rwservice: A25RWService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  star(num) {
    return Math.floor(num/2);
  }

  changeData() {
    this.gameService(this.a25rwservice, 'monsters');
    return this.a25rwservice.getMonster(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`
    this.genericSettings(this.data.name, this.data.desc1,
      this.a25rwservice.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}