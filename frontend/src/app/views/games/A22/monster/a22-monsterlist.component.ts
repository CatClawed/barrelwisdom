import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Monster } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

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
  
    constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService,
      private metaService: Meta,
      private titleService: Title
    ) { 
      this.monsterControl = new FormControl();
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getMonsters();
      this.seoService.createCanonicalURL(`ryza2/monsters/${this.language}`);
      this.titleService.setTitle(`Monsters - Atelier Ryza 2 - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `The list of monsters in Atelier Ryza 2.` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `Monsters` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `The list of monsters in Atelier Ryza 2.` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
      this.metaService.updateTag({ property: `og:image`, content: `https://media.barrelwisdom.com/file/barrelwisdom/main/barrel.png` }, `property="og:image"`);
  
      this.pageForm = this.formBuilder.group({
        filtertext: this.monsterControl,
        type: ['']
      })
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.monsterControl.valueChanges.subscribe(search => {
        this.searchstring = search;
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
        this.error = true,
        this.errorCode = error.status.toString(),
        this.errorVars = this.errorService.getCodes(this.errorCode)
      });
    }
  
    openModal(template: TemplateRef<any>, slugname: string) {
      this.monster = slugname;
      this.location.go('ryza2/monsters/' + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go('ryza2/monsters/' + this.language);
        })
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