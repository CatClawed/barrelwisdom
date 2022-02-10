import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MonsterList } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a15-monsterlist.component.html',
    selector: 'a15-monsterlist',
  })

  export class A15MonsterlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    monsterControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    monster: string = "monsters";
    monsters: MonsterList[];
    filteredMonsters: Observable<MonsterList[]>;
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
      private modalService: BsModalService, private router: Router, public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a15service: A15Service,
  
      private seoService: SeoService
    ) { 
      this.monsterControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.monsterControl,
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getMonsters();
      this.gameTitle = this.a15service.gameTitle[this.language];
      this.gameURL = this.a15service.gameURL;
      this.imgURL = this.a15service.imgURL;

      this.seoURL = `${this.gameURL}/monsters/${this.language}`;
      this.seoTitle = `Monsters - ${this.gameTitle}`;
      this.seoDesc = `The list of monsters in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.monsterControl.valueChanges.subscribe(search => {
        search.filtertext = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getMonsters() {
      this.a15service.getMonsterList(this.language)
      .subscribe(monsters => {
        this.monsters = monsters;
        this.filteredMonsters = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<MonsterList[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.monsters.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        
      });
    }
  
    openModal(template: TemplateRef<any>, slug: string, event?) {
      if (event) {
        if(event.ctrlKey) {
          return;
        }
        else {
          event.preventDefault()
        }
      }
      this.monster = slug;
      this.location.go(`${this.gameURL}/monsters/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/monsters/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string): MonsterList[] {
  
      const filterValue = value.toLowerCase();
      let list: MonsterList[] = this.monsters;

      if(value.length == 0) {
        return list;
      }

      return list.filter(mon => { 
          return mon.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }