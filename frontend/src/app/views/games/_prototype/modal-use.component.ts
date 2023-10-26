import { Location } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { takeUntil } from 'rxjs/operators';
import { FilterableComponent } from './filterable.component';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class ModalUseComponent extends FilterableComponent {
    modalRef: BsModalRef;
    pageForm: UntypedFormGroup;
    selected: string = "thing";
    config: ModalOptions = { class: "col-md-7 mx-auto", animated: false };
    modalLink;

    constructor(
        protected modalService: BsModalService,
        protected readonly destroy$: DestroyService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        protected seoService: SeoService
    ) {
        super(destroy$, route, seoService);
    }

    modalEvent() {
        this.modalLink = this.router.events
            .pipe(takeUntil(this.destroy$))
            .subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.modalService.setDismissReason('link');
                    this.modalService.hide();
                    this.modalLink.unsubscribe();
                }
            });
    }

    openModal(template: TemplateRef<any>, slug: string, event?) {
        if (event !== undefined) {
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

    openDifferentModal(template: TemplateRef<any>, slug: string, destination: string, event?) {
        if (event !== undefined) {
            if (event.ctrlKey) {
                return;
            }
            else {
                event.preventDefault()
            }
        }
        this.selected = slug;
        this.location.go(`${this.gameURL}/${destination}/${slug}/${this.language}`);
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
}