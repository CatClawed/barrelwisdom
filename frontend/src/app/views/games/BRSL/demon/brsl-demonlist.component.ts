import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { DemonList } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'brsl-demonlist.component.html',
    selector: 'brsl-demonlist',
  })

  export class BRSLDemonlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    demonControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    demon: string = "demons";
    demons: DemonList[];
    filteredDemons: Observable<DemonList[]>;
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
      private brslservice: BRSLService,
  
      private seoService: SeoService
    ) { 
      this.demonControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.demonControl
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getDemons();
      this.gameTitle = this.brslservice.gameTitle[this.language];
      this.gameURL = this.brslservice.gameURL;
      this.imgURL = this.brslservice.imgURL;

      this.seoURL = `${this.gameURL}/demons/${this.language}`;
      this.seoTitle = `Demons - ${this.gameTitle}`;
      this.seoDesc = `The list of demons in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.demonControl.valueChanges.subscribe(search => {
        search.filtertext = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getDemons() {
      this.brslservice.getDemonList(this.language)
      .subscribe(demons => {
        this.demons = demons.slice(0,103);
        this.filteredDemons = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<DemonList[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.demons.slice())
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
      this.demon = slug;
      this.location.go(`${this.gameURL}/demons/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/demons/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string): DemonList[] {
  
      const filterValue = value.toLowerCase();
      let list: DemonList[] = this.demons;

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