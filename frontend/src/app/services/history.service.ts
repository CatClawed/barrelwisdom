import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class HistoryService {
    
    constructor(
      private router: Router,
      private location: Location
    ) { }

    public hrefClicked( $event )
    {
      let targetElement;
    
    		if( ( $event.srcElement.nodeName.toUpperCase() === 'A') )
    		    targetElement = $event.srcElement;
    		else if( $event.srcElement.parentElement.nodeName.toUpperCase() === 'A' )
    		    targetElement = $event.srcElement.parentElement;
    		else
    		    return;

        if(targetElement.href && !this.isExternalURL(targetElement.href)) {

          if(!targetElement.href.includes('/media/')) {
            $event.preventDefault();
            if(targetElement.href.indexOf('#') > -1) {
              let url = targetElement.href.split('#');
              let links = url[0].split('/').splice(3);
              this.router.navigate(links, { fragment : `${url[1]}` });
            }
            else {
              let links = targetElement.href.split('/').splice(3);
              //this.location.go(targetElement.href);
              //this.router.navigate(links, {skipLocationChange: true});
              this.router.navigate(links);
            }
          }
        }
  	}

    isExternalURL(url) {
      return new URL(url).origin !== location.origin;
    }
}