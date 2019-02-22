import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  LoginRequest
} from 'src/models/login';
import {
  AccountService
} from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;


  onSubmit() {
    const request: LoginRequest = Object.assign({}, this.formGroup.value);
    this.service.token(request).subscribe(data => {
      if(data.body.isSucess)
      {
        this.router.navigate(['/home/dashboard']);
      }
      else{
        this.snackBar.open(data.body.message, "OK", {
          duration: 2000,
        });
      }
    });
  }
  createFormGroup() {
    return new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  constructor(fb: FormBuilder, private service: AccountService,private router: Router,private snackBar:MatSnackBar) {
    this.formGroup = this.createFormGroup();
  }

  ngOnInit() {}

}
