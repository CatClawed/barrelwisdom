import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorCodeService {
  errorDescription: string;
  errorTitle: string;

  // Fancy pages for non-users
  getCodes(errorCode: string) {
    switch(+errorCode) {
        case 404:
          this.errorTitle = "Oops! You're lost.";
          this.errorDescription = "Our puni told us that the page you're looking for doesn't exist.";
          break;
        default:
          this.errorTitle = "The server puni died.";
          this.errorDescription = "We'll replace that puni soon. You can either refresh, wait several minutes, or try to contact the admin.";
          break;
      }
      return [this.errorTitle, this.errorDescription];
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
        else if(error.status == 400) {
          let problem = "";
          for(let e of Object.values(error.error)) {
            problem = problem + e + " ";
          }
          return problem;
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