import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-landing',
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing  {
   



  

}
