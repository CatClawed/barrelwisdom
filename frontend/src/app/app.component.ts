import { isPlatformBrowser } from '@angular/common';
import { ApplicationRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject, concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'frontend';
  static isBrowser = new BehaviorSubject<boolean>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: any,
    appRef: ApplicationRef,
    updates: SwUpdate) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

    if (updates.isEnabled && 'serviceWorker' in navigator) {
      // hard refreshes mess things up
      // I have to check for the service worker controller
      navigator.serviceWorker.getRegistration().then(function(reg) {
        if (reg) {
          if (reg.active && !navigator.serviceWorker.controller) {
            window.location.reload();
          }
        }
      });
      const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
      const updateAfterStable$ = concat(appIsStable$, interval(60 * 15 * 1000));

      updateAfterStable$.subscribe(async () => {
        try {
          const up = await updates.checkForUpdate();
          if (up) {
            window.location.reload();
          }
        } catch (err) {
          console.log('I messed up? Have an error message.', err);
        }
      });

      // angular recommends I check for this state so I do
      updates.unrecoverable.subscribe((event) => {
        window.location.reload();
      })
    }
  }
}
