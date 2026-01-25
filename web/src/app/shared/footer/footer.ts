import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone: true,
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  year = new Date();

}
