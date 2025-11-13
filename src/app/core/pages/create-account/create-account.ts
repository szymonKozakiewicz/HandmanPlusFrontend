import { Component } from '@angular/core';
import { Logo } from "../../../shared/components/logo/logo";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'create-account',
  imports: [Logo, RouterLink],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {

}
