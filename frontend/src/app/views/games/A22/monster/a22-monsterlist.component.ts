import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Monster } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a22-monsterlist.component.html',
    selector: 'a22-monsterlist',
  })

  export class A22MonsterlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    monsterControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    monster: string = "monsters";
    monsters: Monster[];
    filteredMonsters: Observable<Monster[]>;
    currentType: string = "1";
    searchstring = "";
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
  
    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private modalService: BsModalService,
      private router: Router,
      public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService
    ) { 
      this.monsterControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.monsterControl,
        type: ['']
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getMonsters();
      this.gameTitle = this.a22service.gameTitle;
      this.gameURL = this.a22service.gameURL;
      this.imgURL = this.a22service.imgURL;

      this.seoURL = `${this.gameURL}/monsters/${this.language}`;
      this.seoTitle = `Monsters - ${this.gameTitle}`;
      this.seoDesc = `The list of monsters in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.monsterControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getMonsters() {
      this.a22service.getMonsterList(this.language)
      .subscribe(monsters => {
        this.monsters = monsters;
        this.filteredMonsters = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Monster[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType) : this.monsters.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
    }
  
    openModal(template: TemplateRef<any>, slugname: string) {
      this.monster = slugname;
      this.location.go(`${this.gameURL}/monsters/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/monsters/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string, type: string): Monster[] {
  
      const filterValue = value.toLowerCase();
      let list: Monster[];
      switch(type) {
        case "2": {
            list = this.monsters.filter(mon => mon.montype == 'puni');
          break;
        }
        case "3": {
            list = this.monsters.filter(mon => mon.montype == "weasel");
          break;
        }
        case "4": {
            list = this.monsters.filter(mon => mon.montype == "spirit");
          break;
        }
        case "5": {
            list = this.monsters.filter(mon => mon.montype == "golem");
          break;
        }
        case "6": {
            list = this.monsters.filter(mon => mon.montype == "sheep");
          break;
        }
        case "7": {
            list = this.monsters.filter(mon => mon.montype == "knight");
          break;
        }
        case "8": {
            list = this.monsters.filter(mon => mon.montype == "scorpion");
          break;
        }
        case "9": {
            list = this.monsters.filter(mon => mon.montype == "hedgehog");
          break;
        }
        case "10": {
            list = this.monsters.filter(mon => mon.montype == "wyrm");
          break;
        }
        case "11": {
            list = this.monsters.filter(mon => mon.montype == "roadrunner");
          break;
        }
        case "12": {
            list = this.monsters.filter(mon => mon.montype == "beetle");
          break;
        }
        case "13": {
            list = this.monsters.filter(mon => mon.montype == "shark");
          break;
        }
        case "14": {
            list = this.monsters.filter(mon => mon.size == "Small");
          break;
        }
        case "15": {
            list = this.monsters.filter(mon => mon.size == "Medium");
          break;
        }
        case "16": {
            list = this.monsters.filter(mon => mon.size == "Large");
          break;
        }
        case "17": {
            list = this.monsters.filter(mon => mon.montype == "boss");
          break;
        }
        default: {
            list = this.monsters; 
          break;
        }
      }

      if(value.length == 0) {
        return list;
      }

      return list.filter(mon => { 
          return mon.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }
  
  }