import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  layout: any = 0;
  setTheme(theme: any) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleLayout() {
    this.layout = !this.layout;
    // let vertical: any = document.getElementById('verticalLayout');
    // let horizontal: any = document.getElementById('horizontalLayout');

    // vertical.classList.toggle('d-none');
    // horizontal.classList.toggle('d-none');
  }
}
