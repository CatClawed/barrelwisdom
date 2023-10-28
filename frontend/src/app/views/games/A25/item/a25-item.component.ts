import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-item.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-item',
  providers: [DestroyService]
})
export class A25ItemComponent extends SingleComponent {
  item: Item;

  @Input()
  itemkind: string = "";

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
  changeData(): void {
    this.itemkind = this.itemkind ? this.itemkind : this.route.snapshot.params.itemkind;

    if (this.itemkind === 'materials') {
      this.a25service.getMaterial(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = (item.equip || item.combat) ? `404` : ``
          this.itemkind = '';
          this.item = item;
          this.gameService(this.a25service, `items/${this.itemkind}`);
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.genericSEO(this.item.name,
            this.item.desc ? this.item.desc.replace('<br>', ' -- ') : `Material from ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    }
    else if (this.itemkind === 'synthesis') {
      this.a25service.getSynth(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = item.material ? `404` : ``
          this.itemkind = '';
          this.item = item;
          this.gameService(this.a25service, `items/${this.itemkind}`);
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.genericSEO(this.item.name,
            this.item.desc ? this.item.desc.replace('<br>', ' -- ') : `Material from ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    }
    else {
      this.error = `404`;
    }
    
  }

  replaceVal(item: Item): string {
    if (item.equip) {
      if (item.equip[0].val_bad) {
        return item.desc.replace("{0}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`).replace("{1}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`)
      }
      return item.desc.replace("{0}", ` ${item.equip[0].val_good / 100}`).replace("{1}", ` ${item.equip[0].val_good / 100}`)
    }
    if (item.combat[0].val_bad) {
      return item.desc.replace("{0}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`).replace("{1}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`)
    }
    return item.desc.replace("{0}", ` ${item.combat[0].val_good / 100}`).replace("{1}", ` ${item.combat[0].val_good / 100}`)
  }

  insertStyle(item: Item): string {
    if (!item.material) return;
    if (!item.material[0].color) return;

    return `box-shadow: inset 0 0px 30px 4px ${this.a25service.colorList[item.material[0].color]}`
  }
} 