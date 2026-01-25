import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  title: string = 'Bem-vindo ao Portal de Portal-base';
}
