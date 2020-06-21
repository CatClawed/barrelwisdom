import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorCodeService {
  errorDescription: string;
  errorTitle: string;
  searchBar: boolean;

  getCodes(errorCode: string) {
    switch(+errorCode) {
        case 404:
          this.errorTitle = "Oops! You're lost.";
          this.errorDescription = "Our puni told us that the page you're looking for doesn't exist.";
          this.searchBar = true;
          break;
        default:
          this.errorTitle = "The server puni died.";
          this.errorDescription = "We'll replace that puni soon. You can either refresh, wait several minutes, or try to contact the admin.";
          this.searchBar = false;
          break;
      }
      return [this.errorTitle, this.errorDescription, this.searchBar];
    }


}