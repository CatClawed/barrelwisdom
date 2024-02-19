import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorCodeService {
  errorDescription: string;
  errorTitle: string;

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