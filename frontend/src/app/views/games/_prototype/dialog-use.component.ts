import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router } from '@angular/router';
import { FilterableComponent } from './filterable.component';

@Component({ template: '' })
export abstract class DialogUseComponent extends FilterableComponent {
    protected router = inject(Router)
    protected location = inject(Location)
    protected cdkDialog = inject(Dialog)
    protected cdr = inject(ChangeDetectorRef)

    selected: string = "thing";
    dialogLink;
    dialogref;
    component;

    dialogEvent() {
        this.dialogLink = this.router.events
            .pipe(takeUntilDestroyed(this.destroyRef))
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

    openDialog(slug: string, event?: any, destination?: string, otherComp?) {
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
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(returnToPage => {
                if (returnToPage !== false) {
                    this.location.go(`${this.gameURL}/${this.section}/${this.language}`);
                    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
                }
                this.dialogLink.unsubscribe();
            })
    }
}