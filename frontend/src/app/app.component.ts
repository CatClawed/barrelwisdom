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

    if (AppComponent.isBrowser.getValue() && updates.isEnabled) {
      const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
      const updateInterval$ = interval(15 * 60 * 1000);
      const updateAfterStable$ = concat(appIsStable$, updateInterval$);

      updateAfterStable$.subscribe(async () => {
        try {
          const updateFound = await updates.checkForUpdate();
          if (updateFound) {
            window.location.reload();
          }
        } catch (err) {
          console.log('You might be using incognito or an unsupported browser. Or I messed up. Have an error message.', err);
        }
      });

      updates.unrecoverable.subscribe((event) => {
        console.log("aw heck")
        window.location.reload();
      })
    }
  }
}
