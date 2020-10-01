import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
 

interface AuthResponeData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post < AuthResponeData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxHzl_KOZzGokKnDLGaQwcVOxhPeSIr8g',
    {
      email: email,
      password: password,
      retuSecureToken: true

      }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'this email exist already';
      }
      return throwError(errorMessage);
    }));
  }
}
