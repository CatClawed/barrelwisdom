import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorCodeService {
  errorDescription: string;
  errorTitle: string;
  searchBar: boolean;

  // Fancy pages for non-users
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

    // generic nobody loves you form error messages for users
    errorMessage(error) {
      if(error.status >= 400 && error.status < 500 ) {
        if("detail" in error.error) {
          return error.error['detail'];
        }
        else if("non_field_errors" in error.error) {
          return error.error['non_field_errors'];
        }
        else {
          return "Some 400 error message. Bug admin. Code: " + error.status;
        }
      }
      else {
        return "The server is on fire, bug admin.";
      }
    }


}