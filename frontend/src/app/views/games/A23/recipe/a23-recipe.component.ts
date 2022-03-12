import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeIdea } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { HistoryService } from '@app/services/history.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'a23-recipe.component.html',
})
export class A23RecipeComponent implements OnInit {
  error: string = '';
  recipes: RecipeIdea[];
  colset: string;
  language = "";
  tab: string = "";

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  sophie_num: number = 28;
  plachta_num: number = 53;
  shared_num: number = 75;
  book_num: number = 80;

  sophie = false;
  plachta = false;
  shared = false;
  book = false;

  ctx: RecipeIdea;

  fixit = []

constructor(
    private route: ActivatedRoute,
    private a23service: A23Service,
    private location: Location,
    public historyService: HistoryService,
    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.tab = this.route.snapshot.queryParamMap.get('tab');

    if (this.tab) {
      switch (this.tab) {
        case 'sophie':
          this.sophie = true;
          break;
        case 'plachta':
          this.plachta = true;
          break;
        case 'reference':
          this.book = true;
          break;
        case 'shared':
          this.shared = true;
          break;
        default:
          this.sophie = true;
      }
    }
    else {
      this.sophie = true;
    }

    this.a23service.getRecipeList(this.language)
    .subscribe({next: recipe => {
        this.error =``;
        this.recipes = recipe;
        let col = 1
        for (let i = 0; i < this.recipes.length; ) {

          for (col = 1; col <= 5; col++) {
            if (this.recipes.length <= i) {
              this.fixit.push(false)
            }
            else if (col != this.recipes[i].col) {
              this.fixit.push(false)
            }
            else {
              this.fixit.push(this.recipes[i])
              i++;
            }
          }
        }
        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;

        this.seoURL = `${this.gameURL}/recipe-ideas/${this.language}`;
        this.seoTitle = `Recipe Ideas - ${this.gameTitle}`;
        this.seoDesc = `All recipe ideas in ${this.gameTitle}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }

  toggle(s: boolean, p: boolean, sh: boolean, b: boolean, char: string) {
    this.sophie = s;
    this.plachta = p;
    this.shared = sh;
    this.book = b;
    this.location.replaceState(`${this.gameURL}/recipe-ideas/${this.language}?tab=${char}`);
  }

  context(r: RecipeIdea) {
    this.ctx = r;
  }
} 