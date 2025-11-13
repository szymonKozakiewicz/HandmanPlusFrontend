import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from "@angular/router";
import { Logo } from "../../../../shared/components/logo/logo";



@Component({
  selector: 'app-landing',
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, RouterLink, Logo],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing  {
   



}
