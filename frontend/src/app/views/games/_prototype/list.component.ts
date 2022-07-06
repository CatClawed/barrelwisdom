import { Location } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { takeUntil } from 'rxjs/operators';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class ListComponent {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    error: string = '';
    selected: string = "thing";
    section: string = "things";
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
        protected modalService: BsModalService,
        protected readonly destroy$: DestroyService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        protected seoService: SeoService
    ) {
        this.language = this.route.snapshot.params.language;
    }

    modalEvent() {
        let modalLink = this.router.events
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.modalService.setDismissReason('link');
                    this.modalService.hide();
                    modalLink.unsubscribe();
                }
            });
    }

    openModal(template: TemplateRef<any>, slug: string, event?) {
        if (event) {
            if (event.ctrlKey) {
                return;
            }
            else {
                event.preventDefault()
            }
        }
        this.selected = slug;
        this.location.go(`${this.gameURL}/${this.section}/${slug}/${this.language}`);
        this.modalRef = this.modalService.show(template);
        this.modalRef.onHide
            .pipe(takeUntil(this.destroy$))
            .subscribe((reason: string | any) => {
                if (reason != "link") {
                    this.location.go(`${this.gameURL}/${this.section}/${this.language}`);
                    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
                }
            })
    }

    get f() { return this.pageForm.controls; }

    identify(index, item) {
        return item.slug;
    }
}