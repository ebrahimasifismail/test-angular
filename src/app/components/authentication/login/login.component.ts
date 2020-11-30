import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showPasswordHelper } from 'src/app/models/common.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup ;
  loginFormGroupValid: boolean = false;
    // @ViewChild('remember', { static: true }) remember: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private notify: NotificationService,
        private router: Router,
        private renderer: Renderer2
    ) {
        this.loginFormGroup = this.formBuilder.group({
            username_email: ['', Validators.compose([
                Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/), Validators.required, 
            ])],
            password: ['', Validators.compose([
                Validators.minLength(6), Validators.required
            ])]
        });
    }

    ngOnInit() {
        
    }

    // login submission
    loginSubmit(formValue: any) {
      if(this.loginFormGroup.status === 'VALID') {
        var isAuthenticated = this.authService.userLogin(formValue)
        console.log(isAuthenticated, "isAuthenticated")
        if (isAuthenticated){
          this.router.navigate(['/home']);
          console.log("isAuthenticated = true")
        }
        else{
          this.notify.notifyError('Username or password incorrect', 'Login failed');
          this.loginFormGroupValid = true;
          this.loginFormGroup.reset();
          console.log("isAuthenticated = false")
        }
    } else {
        this.loginFormGroupValid = false;
    }
        
    }

    // remember me
    setRememberMe(el: any) {
    }

    // show/hide password
    showPassword(el:any) {
      showPasswordHelper(el, this.renderer);
  }
}
