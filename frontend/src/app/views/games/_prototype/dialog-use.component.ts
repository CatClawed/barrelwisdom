import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { takeUntil } from 'rxjs/operators';
import { FilterableComponent } from './filterable.component';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class DialogUseComponent extends FilterableComponent {
    pageForm: UntypedFormGroup;
    selected: string = "thing";
    dialogLink;
    dialogref;
    component;

    constructor(
        protected readonly destroy$: DestroyService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        protected seoService: SeoService,
        protected breadcrumbService: BreadcrumbService,
        protected cdkDialog: Dialog) {
        super(destroy$, route, breadcrumbService, seoService);
    }

    dialogEvent() {
        this.dialogLink = this.router.events
            .pipe(takeUntil(this.destroy$))
            .subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.dialogref.close(false);
                    this.dialogLink.unsubscribe();
                    this.dialogref.closed.unsubscribe();
                }
            });
    }

    // intentionally blank
    extraSettings(): void {}

    openDialog(slug: string, event?: Event, destination?: string, otherComp?) {
        if (event !== undefined) {
            event.preventDefault()
        }
        this.selected = slug;
        let dest = destination ? destination : this.section;
        let comp = otherComp ? otherComp : this.component;
        this.location.go(`${this.gameURL}/${dest}/${slug}/${this.language}`);
        this.dialogref = this.cdkDialog.open(comp, {
            backdropClass: ['closer'],
            panelClass: ['dialog-margin'],
        });
        this.dialogref.componentInstance.inputSlug = slug;
        this.dialogref.componentInstance.showNav = false;
        this.dialogref.componentInstance.inputLang = this.language;
        this.extraSettings();
        this.dialogEvent();
        this.dialogref.closed
            .pipe(takeUntil(this.destroy$))
            .subscribe(returnToPage => {
                if (returnToPage !== false) {
                    this.location.go(`${this.gameURL}/${this.section}/${this.language}`);
                    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
                }
                this.dialogLink.unsubscribe();
            })
    }
}