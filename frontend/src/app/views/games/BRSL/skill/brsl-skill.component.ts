import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { SeoService } from '@app/services/seo.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-skill.component.html',
})
export class BRSLSkillComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  skills: Skill[];
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private brslservice: BRSLService,
    private seoService: SeoService,
    private viewportScroller: ViewportScroller,
    private loc: Location) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.brslservice.getSkillList(this.language)
    .subscribe({next: skill => {
        this.error = false;
        this.skills = skill;

        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/skills/${this.language}`;
        this.seoTitle = `Skills - ${this.gameTitle}`;
        this.seoDesc = `All skills in ${this.gameTitle}.`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error = true;
      this.errorCode = `${error.status}`;
    }});
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first()
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/skills/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 