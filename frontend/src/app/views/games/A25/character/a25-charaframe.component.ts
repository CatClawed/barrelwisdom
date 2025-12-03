import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';

@Component({
  templateUrl: 'a25-charaframe.component.html',
  selector: 'a25-charaframe',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['charaframe.scss', '../resleri.scss'],
  imports: [...CommonImports, NgTemplateOutlet]
})
export class A25CharaFrameComponent {
  protected a25service = inject(A25Service);
  protected sanitizer = inject(DomSanitizer)
  fillL = 'grey';
  fillR = 'grey';
  colors = ['red', 'green', 'yellow', 'blue', 'purple']
  @Input() collectionMode: boolean = false;
  @Input() chara: Character;
  @Input() collection: any;
  @Output() buttonClicked = new EventEmitter();
  imgURL;
  gameURL;
  @Input() language: string;

  constructor() {
    this.imgURL = this.a25service.imgURL;
    this.gameURL = this.a25service.gameURL;
  }

  starMap = {
    1: [1, false],
    2: [2, false],
    3: [3, false],
    4: [3, true],
    5: [4, false],
    6: [4, true],
    7: [5, false],
    8: [6, false]
  }

  inCollection() {
    if (this.collectionMode) {
      if (this.collection.characters[this.chara.id]) return true
    }
    return false
  }

  fetchStars(id: number, rarity: number) {
    let stars = ['', '']
    let limit = rarity;
    if (this.collectionMode) {
      if (this.collection.characters[id]) {
        if (this.starMap[this.collection.characters[id]][1]) {
          stars[1] = `<svg><use href="/media/spritesheets/main.svg?v=-1#fa-half-star"></use></svg>`;
        }
        limit = this.starMap[this.collection.characters[id]][0]
      }
    }
    for (let i = 0; i < limit; i++) {
      stars[0] += '<svg><use href="/media/spritesheets/main.svg?v=-1#fa-star"></use></svg>'
    }
    return this.sanitizer.bypassSecurityTrustHtml(stars[0] + stars[1]);
  }
}
