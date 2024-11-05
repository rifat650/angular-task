import { Injectable } from '@angular/core';
import { signUpValue } from './signupValue.model';
import { loginValue } from './loginValue.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private LoggedIn = false;

  saveToLocalStorage(userInput: signUpValue) {
    localStorage.setItem('signupValue', JSON.stringify(userInput));
  }
  getSignupValue(){
    return JSON.parse(localStorage.getItem('signupValue'))
  }

  validateLoginCredentials(loginData: loginValue) {
    let signupValue: signUpValue = this.getSignupValue()

  if(signupValue !=null){
    if (signupValue.email === loginData.email && signupValue.password === loginData.password) {
      this.LoggedIn = true;
      return true;
    } else {
      return false;
    }
  }else{
    return false;
  }
    
  }

  LogOutUser(){
    this.LoggedIn=false;
    localStorage.clear()
  }

  UserLoggedIn(){
    return this.LoggedIn;
  }

}
