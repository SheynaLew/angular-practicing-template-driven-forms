import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = "advanced";

  // Max code start
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSubscription = this.subscriptions[1];
  // Max code end



  @ViewChild('signupForm') suForm: NgForm;

  // Max code start
  @ViewChild('signupForm', { static: false }) signUpForm: NgForm;
  // Max code end



  // Max code start
  onSubmit() {
    console.log("value", this.signUpForm.value);
    console.log("email", this.signUpForm.value.email);
    console.log("subscriptions", this.signUpForm.value.subscriptions)
    console.log("password", this.signUpForm.value.password)
  }
  // Max code end

  onSubmitMyForm() {
    console.log("value", this.suForm.value);
    console.log("email", this.suForm.value.email);
    console.log("subscriptions", this.suForm.value.subscriptions)
    console.log("password", this.suForm.value.password)
  }
}
