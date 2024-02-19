import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { of } from 'rxjs';
import { CommonImports, PopoverBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { A25IconComponent } from './a25-icon.component';

@Component({
  templateUrl: 'a25-item.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-item',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, PopoverBandaidModule, A25IconComponent]
})
export class A25ItemComponent extends SingleComponent {
  @Input()
  itemkind: string = "";

  itemkind2: string = "";
  
  difficulties = {
    1: "Normal",
    2: "Hard",
    3: "Very Hard",
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.itemkind2 = this.itemkind ? this.itemkind : this.route.snapshot.params.itemkind;
    this.gameService(this.a25service, `items/${this.itemkind2}`);
    switch(this.itemkind2) {
      case 'materials': return this.a25service.getMaterial(this.slug, this.language);
      case 'synthesis': return this.a25service.getSynth(this.slug, this.language);
      default: {
        this.error = `404`;
        return of(undefined)
      }
    }
  }

  afterAssignment(): void {
    if (this.data.equip || this.data.combat) {
      this.data.desc = this.replaceVal(this.data)
    }
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSEO(this.data.name,
      this.data.desc ? this.data.desc.replaceAll('<br>', ' -- ') : `Material from ${this.gameTitle}`);
  }

  replaceVal(item: Item): string {
    if (item.equip) {
      if (item.equip[0].val_bad) {
        return item.desc.replaceAll("{0}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`).replaceAll("{1}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`)
      }
      return item.desc.replaceAll("{0}", ` ${item.equip[0].val_good / 100}`).replaceAll("{1}", ` ${item.equip[0].val_good / 100}`)
    }
    if (item.combat) {
      return item.desc.replaceAll("{0}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`).replaceAll("{1}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`)
    }
    return item.desc.replaceAll("{0}", ` ${item.combat[0].val_good / 100}`).replaceAll("{1}", ` ${item.combat[0].val_good / 100}`)
  }

  insertStyle(item: Item): string {
    if (!item.material) return;
    if (!item.material[0].color) return;
    return `box-shadow: inset 0 0px 30px 4px ${this.a25service.colorList[item.material[0].color]}`
  }
} 