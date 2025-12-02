import { AsyncPipe, isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, OnDestroy, Output, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'filter-list.component.html',
  selector: 'filter-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...CommonImports, NgTemplateOutlet, AsyncPipe]
})
export class FilterListComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  @Input() name: string;
  @Input() list: Observable<any[]>;
  @Input() hide: boolean = false;
  @Output() hideChange = new EventEmitter<boolean>();
  @Input() template: TemplateRef<any>;
  @Input() loadAll: boolean = false;
  intersectionObserver?: IntersectionObserver;
  waitingOver: boolean = false;

  @ViewChild('loadingSpinner')
  loadingSpinner: ElementRef;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.waitingOver = true;
    }, 300);

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && this.list !== undefined && this.waitingOver) {
            this.hide = true;
            this.hideChange.emit(this.hide);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (this.loadingSpinner) {
      this.intersectionObserver.observe(this.loadingSpinner.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }
}