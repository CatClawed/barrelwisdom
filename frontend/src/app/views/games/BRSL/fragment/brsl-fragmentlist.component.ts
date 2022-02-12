import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event, NameLink, SchoolLocation } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { SeoService } from '@app/services/seo.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'brsl-fragmentlist.component.html',
  })

  export class BRSLFragmentComponent implements OnInit {
    pageForm: FormGroup;
    fragmentControl: FormControl;
    error: boolean = false;
    errorCode: string;
    event: Event[];
    character: NameLink[];
    location: SchoolLocation[];
    filteredEvents: Observable<Event[]>;
    language = "";
    selectedChar = "Any";
    selectedLoc = "Any";

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private brslservice: BRSLService,
      private seoService: SeoService,
    ) { 
      this.fragmentControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.fragmentControl,
        character: ['Any'],
        location: ['Any']
      })
    }
  
    ngOnInit(): void {
      this.language = this.route.snapshot.params.language;
      this.getEvents();

      this.gameTitle = this.brslservice.gameTitle[this.language];
      this.gameURL = this.brslservice.gameURL;
      this.imgURL = this.brslservice.imgURL;

      this.seoURL = `${this.gameURL}/fragments-and-dates/${this.language}`;
      this.seoTitle = `Fragments & Dates - ${this.gameTitle}`;
      this.seoDesc = `The list of fragments and dates in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    }
  
    getEvents() {
      this.brslservice.getCharacterList(this.language)
      .subscribe({next: f => {
        this.character = f.slice(2);
      },
      error: error => {
        this.error = true;
        this.errorCode = `${error.status}`;
      }});
      this.brslservice.getSchoolLocationList(this.language)
      .subscribe({next: f => {
        this.location = f;
      },
      error: error => {
        this.error = true;
        this.errorCode = `${error.status}`;
      }});
      this.brslservice.getFragmentList(this.language)
      .subscribe({next: fragment => {
        this.event = fragment;
        this.filteredEvents = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Event[]>),
          map((search: any) => search ? this.filterT(search.filtertext, search.character, search.location) : this.event.slice())
        );
      },
      error: error => {
        this.error = true;
        this.errorCode = `${error.status}`;
      }});
    }
  
    private filterT(value: string, char: string, loc: string): Event[] {
      let list: Event[] = this.event;
      if(char != "Any") {
        list = list.filter(evt => (evt.character) ? evt.character.name == char : false)
      }
      if(loc != "Any") {
        list = list.filter(evt => (evt.location) ? evt.location.loc == loc : false)
      }
      if(value) {
        const filterValue = value.toLowerCase();
        list = list.filter(fragment => { 
            return fragment.fragment.some(i => i.name.toLowerCase().includes(filterValue) || i.eff.toLowerCase().includes(filterValue) || i.desc.toLowerCase().includes(filterValue));
          });
      }
      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }