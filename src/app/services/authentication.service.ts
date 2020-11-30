import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    isAuthenticated: boolean;
    constructor() { 
        
    }

    



    // user login 
    userLogin(formValue: any) {
        if (formValue.username_email === "janedoe@gmail.com" && formValue.password === "Test@123"){
          this.isAuthenticated = true
          localStorage.setItem('isAuthenticated', 'true');
          return true
        }

        else{
          localStorage.setItem('isAuthenticated', 'false');
          this.isAuthenticated = false
          return false
        }
    }

    isUserAuthenticated(): boolean {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        return true
      }
      else{
        return false
      }
    
    }

    userLogout() {
      this.isAuthenticated = false
    }

    
}
