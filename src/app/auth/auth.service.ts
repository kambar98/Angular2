import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    );
  }
}
