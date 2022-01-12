import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Event, NameLink, SchoolLocation } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'brsl-fragmentlist.component.html',
    selector: 'brsl-fragmentlist',
  })

  export class BRSLFragmentComponent implements OnInit {
    pageForm: FormGroup;
    fragmentControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    event: Event[];
    character: NameLink[];
    location: SchoolLocation[];
    filteredEvents: Observable<Event[]>;
    searchstring = "";
    language = "";
    selectedChar = "Any";
    selectedLoc = "Any";
    currentChar = "Any";
    currentLoc = "Any";

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
      public historyService: HistoryService,
      private errorService: ErrorCodeService,
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
  
      this.fragmentControl.valueChanges.subscribe(search => {
        this.searchstring = search; 
      }); 

      this.pageForm.get('character').valueChanges
        .subscribe(val => {
          this.currentChar = val;
        });

        this.pageForm.get('location').valueChanges
        .subscribe(val => {
          this.currentLoc = val;
        });
    }
  
    getEvents() {
      this.brslservice.getCharacterList(this.language)
      .subscribe(f => {
        this.character = f.slice(2);
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
      this.brslservice.getSchoolLocationList(this.language)
      .subscribe(f => {
        this.location = f;
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
      this.brslservice.getFragmentList(this.language)
      .subscribe(fragment => {
        this.event = fragment;
        this.filteredEvents = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Event[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentChar, this.currentLoc) : this.event.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
    }
  
    private filterT(value: string, char: string, loc: string): Event[] {
  
      const filterValue = value.toLowerCase();
      let list: Event[] = this.event;

      if(char != "Any") {
        list = list.filter(evt => (evt.character) ? evt.character.name == char : false)
      }
      if(loc != "Any") {
        list = list.filter(evt => (evt.location) ? evt.location.loc == loc : false)
      }

      if(value.length > 0) {
        list = list.filter(fragment => { 
            return fragment.fragment.some(i => i.name.toLowerCase().includes(filterValue) || i.eff.toLowerCase().includes(filterValue) || i.desc.toLowerCase().includes(filterValue));
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }
  
  }