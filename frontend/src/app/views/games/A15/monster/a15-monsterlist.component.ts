import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MonsterList } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

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
    currentType: string = "1";
    searchstring = "";
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
  
    constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a15service: A15Service,
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
      this.seoService.createCanonicalURL(`escha/monsters/${this.language}`);
      this.titleService.setTitle(`Monsters - Atelier Escha & Logy - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `The list of monsters in Atelier Escha & Logy.` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `Monsters` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `The list of monsters in Atelier Escha & Logy.` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
      this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
  
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
      this.a15service.getMonsterList(this.language)
      .subscribe(monsters => {
        this.monsters = monsters;
        this.filteredMonsters = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<MonsterList[]>),
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
      this.location.go('escha/monsters/' + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go('escha/monsters/' + this.language);
        })
    }
  
    private filterT(value: string, type: string): MonsterList[] {
  
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
  
  }