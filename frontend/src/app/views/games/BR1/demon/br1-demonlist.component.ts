import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Demon } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'br1-demonlist.component.html',
    providers: [DestroyService]
  })

  export class BR1DemonlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    demonControl: FormControl;
    error: string = '';
    demon: string = "demons";
    demons: Demon[];
    filteredDemons: Observable<Demon[]>;
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
      private readonly destroy$: DestroyService,
      private router: Router,
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
      
      let modalLink = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
          modalLink.unsubscribe();
        }
      });
    }
  
    getDemons() {
      this.br1service.getDemonList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: demons => {
        this.demons = demons;
        this.filteredDemons = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Demon[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.demons.slice())
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
      this.demon = slug;
      this.location.go(`${this.gameURL}/demons/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide
      .pipe(takeUntil(this.destroy$))
      .subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/demons/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string): Demon[] {
      let list: Demon[] = this.demons;
      if(value) {
        const filterValue = value.toLowerCase();
        return list = list.filter(demon => { 
            return demon.name.toLowerCase().includes(filterValue);
          });
      }
      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slugname; 
   }
  }