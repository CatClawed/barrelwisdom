import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { DataComponent } from './data.component';

@Component({ template: '' })
export abstract class SingleComponent extends DataComponent {
  protected cdr = inject(ChangeDetectorRef)
  colset: string;
  small: boolean = false;
  @Input() inputSlug: string;
  @Input() showNav: boolean = true
  @Input() inputLang?: string;
  @Input() url: string;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {
    super()
    this.slug = this.inputSlug ? this.inputSlug : this.route.snapshot.params.subject;
    this.data = this.inputData ? this.inputData : undefined;
    if (this.showNav) this.colset = "grid-9 mx-auto ";
  }

  paramWatch(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.language = this.inputLang ? this.inputLang : params.get('language');
          this.slug = this.inputSlug ? this.inputSlug : params.get('subject');
          return this.changeData().pipe(
            tap(() => {
              if (this.inputSlug) this.cdr.markForCheck();
            })
          )
        }),
        catchError(error => {
          this.error = this.breadcrumbService.setStatus(error.status);
          return of(undefined);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(data => {
        this.data = data;
        if (this.data) {
          this.error = this.breadcrumbService.setStatus(200);
          this.afterAssignment();
        }
      })
  }
}