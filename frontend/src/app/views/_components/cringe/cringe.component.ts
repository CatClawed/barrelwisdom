// https://obscountdown.com/article/121-complete-guide-to-inject-google-ad-units-in-you-angular-18-application

import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';

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
export class CringeAdComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = `(adsbygoogle = window.adsbygoogle || []).push({});`;
      document.body.appendChild(script);
    }
  }
}