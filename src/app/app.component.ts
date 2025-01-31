import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
// import { MainComponent } from './components/main/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MainComponent } from './components/main/main.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Track-Fit-Pro';

  sidebarSelected: string = 'All';
  onSidebarChange(selected: string): void {
    this.sidebarSelected = selected;
  }
}
