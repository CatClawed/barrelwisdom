import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { takeUntil } from 'rxjs/operators';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class ListComponent2 implements OnInit, OnDestroy {
    modalRef: BsModalRef;
    pageForm: UntypedFormGroup;
    error: string = '';
    selected: string = "thing";
    section: string;
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
    modalLink;

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

    ngOnInit(): void {
        this.modalEvent();
        this.paramWatch();
    }

    paramWatch() {
        this.route.paramMap.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.language = params.get('language');
                this.changeData()
            });
    }

    gameService(service: any, section: string) {
        this.gameTitle = service.gameTitle[this.language];
        this.gameURL = service.gameURL;
        this.imgURL = service.imgURL;
        this.section = section;
    }

    modalEvent() {
        this.modalLink = this.router.events
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
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

    get f() { return this.pageForm.controls; }

    identify(index, item) {
        return item.slug;
    }

    identify2(index, item) {
        return item.slugname;
    }

    genericSEO(name: string, desc: string): void {
        this.seoURL = `${this.gameURL}/${this.section}/${this.language}`;
        this.seoTitle = `${name} - ${this.gameTitle}`;
        this.seoDesc = `${desc}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }

    abstract changeData(): void;

    ngOnDestroy() {
        this.modalService.hide();
        this.modalLink.unsubscribe();
    }
}