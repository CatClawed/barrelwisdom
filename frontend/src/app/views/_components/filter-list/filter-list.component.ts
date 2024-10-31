import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewChild } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { DestroyService } from '@app/services/destroy.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Observable, takeUntil } from 'rxjs';

@Component({
  templateUrl: 'filter-list.component.html',
  selector: 'filter-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [...CommonImports, NgTemplateOutlet, AsyncPipe]
})
export class FilterListComponent implements AfterViewInit, OnDestroy {
  @Input()
  title: string;

  @Input()
  list: Observable<any[]>;

  @Input()
  hide: boolean = false;

  @Output()
  hideChange = new EventEmitter<boolean>();

  @Input()
  template: TemplateRef<any>;

  skip: boolean = false;
  intersectionObserver: IntersectionObserver;
  waitingOver: boolean = false;

  @ViewChild('loadingSpinner')
  loadingSpinner: ElementRef;

  constructor(protected readonly destroy$: DestroyService) {
    AppComponent.isBrowser
      .pipe(takeUntil(this.destroy$))
      .subscribe(isBrowser => {
      if (!isBrowser) {
        this.skip = true;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.skip) return;
    setTimeout(() => {
      this.waitingOver = true;
    }, 300); // probably enough time to stop certain behaviors
      this.intersectionObserver = new IntersectionObserver (
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && this.list !== undefined && this.waitingOver) {
                    this.hide = true;
                    this.hideChange.emit(this.hide)
                }
            });
        },
        { threshold: 0.2}
    );
    this.intersectionObserver.observe(this.loadingSpinner.nativeElement);

  }

  ngOnDestroy(): void {
   if (!this.skip) this.intersectionObserver.disconnect();
  }
}