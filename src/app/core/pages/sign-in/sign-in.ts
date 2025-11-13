import { Component } from '@angular/core';
import { Logo } from "../../../shared/components/logo/logo";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  imports: [Logo, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

}
