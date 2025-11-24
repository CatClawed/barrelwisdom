// https://obscountdown.com/article/121-complete-guide-to-inject-google-ad-units-in-you-angular-18-application

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'cringe-ad-responsive',
  standalone: true,
  template: `
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6107930038683704"
        data-ad-slot="3893440132"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
  `,
})
export class CringeAdComponent implements AfterViewInit, OnDestroy {
  private scriptId = generateRandomString(10); // Unique ID for the script element
  browser = false;

  ngAfterViewInit() {

    AppComponent.isBrowser
      .subscribe(isBrowser => {
        this.browser = isBrowser;
        if (isBrowser) {
          if (!document.getElementById(this.scriptId)) { // Prevent script duplication
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = this.scriptId; // Assign unique ID
            script.text = `(adsbygoogle = window.adsbygoogle || []).push({});`;
            document.body.appendChild(script);
          }
        }
      });
  }

  ngOnDestroy() {
    if (this.browser) {
      const script = document.getElementById(this.scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    }
  }
}

export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
}