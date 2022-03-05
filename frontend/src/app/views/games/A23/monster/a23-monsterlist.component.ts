import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Monster } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'a23-monsterlist.component.html',
  })

  export class A23MonsterlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    monsterControl: FormControl;
    error: string = '';
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
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a23service: A23Service,
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
      this.gameTitle = this.a23service.gameTitle[this.language];
      this.gameURL = this.a23service.gameURL;
      this.imgURL = this.a23service.imgURL;

      this.seoURL = `${this.gameURL}/monsters/${this.language}`;
      this.seoTitle = `Monsters - ${this.gameTitle}`;
      this.seoDesc = `The list of monsters in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getMonsters() {
      this.a23service.getMonsterList(this.language)
      .subscribe({next: monsters => {
        this.monsters = monsters;
        this.filteredMonsters = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Monster[]>),
          map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.monsters.slice())
        );
      },
      error: error => {
        this.error =`${error.status}`;
      }});
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
  
    private filterT(value: string, type: string): Monster[] {
      let list: Monster[];
      switch(type) {
        case "2":
            list = this.monsters.filter(mon => mon.kind == 'puni');
            break;
        case "3":
            list = this.monsters.filter(mon => ["golem", "jellyfish"].includes(mon.kind));
          break;
        case "4":
            list = this.monsters.filter(mon => ["rabbit", "bat", "bird", "dream-eater"].includes(mon.kind));
          break;
        case "5":
            list = this.monsters.filter(mon => ["ghost", "apostle"].includes(mon.kind));
          break;
        case "6":
            list = this.monsters.filter(mon => ["mushroom", "dryad"].includes(mon.kind));
          break;
        case "7":
            list = this.monsters.filter(mon => ["dragonaire", "sea-serpent"].includes(mon.kind));
          break;
        case "8":
            list = this.monsters.filter(mon => ["small-groll", "medium-groll", "elvira"].includes(mon.kind));
          break;
        default:
            list = this.monsters; 
          break;
      }

      if(!value) {
        return list;
      }
      const filterValue = value.toLowerCase();
      return list.filter(mon => { 
          return mon.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }