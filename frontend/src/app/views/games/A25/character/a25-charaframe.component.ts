import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DestroyService } from '@app/services/destroy.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';

@Component({
  templateUrl: 'a25-charaframe.component.html',
  selector: 'a25-charaframe',
  providers: [DestroyService],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `.a25-star-font {
      -webkit-text-stroke-color:black;
      color:yellow;
      padding-top:0.3rem;
    }`,
    `.a25-char-font {
      height: 24%;
      width: 24%;
      aspect-ratio:1;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:50%;
      position:absolute;
      bottom:0;
      right:3%;
    }`,
    `@media screen and (min-width: 800px) {
      .a25-char-font {
        font-size:1.3vw
      }
      .a25-star-font {
        font-size:1.5vw;
        -webkit-text-stroke-width:.15vw;
      }
      .a25-half-star {
        display:inline-block;
        overflow-x:clip;
        width:1vw;
      }
    }`,
    `@media screen and (max-width: 800px) {
      .a25-char-font {
        font-size:3.8vw
      }
      .a25-star-font {
        font-size:4vw;
        -webkit-text-stroke-width:.4vw;
      }
      .a25-half-star {
        display: inline-block;
        overflow-x: clip;
        width: 3vw;
      }
    }`,
  ],
  imports: [...CommonImports, NgTemplateOutlet]
})
export class A25CharaFrameComponent {
    fillL = 'grey';
    fillR = 'grey';
    colors = ['red', 'green', 'yellow', 'blue', 'purple']

    @Input()
    collectionMode: boolean = false;

    @Input()
    chara: Character;

    @Input()
    collection: any;

    @Output()
    buttonClicked = new EventEmitter<string>();

    imgURL;
    gameURL;

    @Input()
    language: string;

  constructor(
    protected readonly destroy$: DestroyService,
    protected a25service: A25Service) {
        this.imgURL = a25service.imgURL;
        this.gameURL = a25service.gameURL;
  }

  starMap = {
    1: [1, false],
    2: [2, false],
    3: [3, false],
    4: [3, true],
    5: [4, false],
    6: [4, true],
    7: [5, false]
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
              stars[1] = `<div class="a25-half-star"><span class="fa-star-half"></span></div>`;
            }
            limit = this.starMap[this.collection.characters[id]][0]
          }
    }
    for (let i = 0; i < limit; i++) {
      stars[0] += '<span class="fa-star"></span>'
    }
    return stars[0]+stars[1];
  }
}
