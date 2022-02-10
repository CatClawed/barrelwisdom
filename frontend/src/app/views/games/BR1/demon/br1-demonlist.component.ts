import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Demon } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'br1-demonlist.component.html',
    selector: 'br1-demonlist',
  })

  export class BR1DemonlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    demonControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    demon: string = "demons";
    demons: Demon[];
    filteredDemons: Observable<Demon[]>;
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
      private br1service: BR1Service,
  
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

      this.gameTitle = this.br1service.gameTitle;
      this.gameURL = this.br1service.gameURL;
      this.imgURL = this.br1service.imgURL;

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
      this.br1service.getDemonList(this.language)
      .subscribe(demons => {
        this.demons = demons;
        this.filteredDemons = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Demon[]>),
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
  
    private filterT(value: string): Demon[] {
  
      const filterValue = value.toLowerCase();
      let list: Demon[] = this.demons;

      if(value.length > 0) {
        list = list.filter(demon => { 
            return demon.name.toLowerCase().includes(filterValue);
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }