import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
 

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post < AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxHzl_KOZzGokKnDLGaQwcVOxhPeSIr8g',
    {
      email: email,
      password: password,
      retuSecureToken: true

      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication
        (resData.email,
          resData.localId,
          resData.idToken,
          + resData.expiresIn);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxHzl_KOZzGokKnDLGaQwcVOxhPeSIr8g',
      {
        email: email,
        password: password,
        retuSecureToken: true

      }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication
          (resData.email,
            resData.localId,
            resData.idToken,
            + resData.expiresIn);
      }));
  }

  private handleAuthentication(email: string, token: string,userId:string, expiresIn: number) {
     tap(resData => {
       const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User
        (email,
          userId,
          token,
          expirationDate);
      this.user.next(user);
    }
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email exist already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this email or password dont exist.'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'this email or password dont exist.'
        break;
    }
    return throwError(errorMessage);
  
  }
}
