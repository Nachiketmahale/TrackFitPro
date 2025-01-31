import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { UserChartComponent } from '../user-chart/user-chart.component';
import { Input } from '@angular/core';

import { UserData,UserDataService } from '../../services/user-data.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,TableComponent,CommonModule,UserChartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() sidebarSelected: string = 'All';
  
  users: UserData[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    
    this.userDataService.users$.subscribe((users) => {
      this.users = users; 
    });
}

workoutEmojis: { [key: string]: string } = {
  'Running': '🏃',
  'Swimming': '🏊‍♂️',
  'Walking': '🚶‍♂️',
  'Yoga': '🧘‍♂️',
  'Cycling': '🚴‍♂️'
};

getWorkoutEmoji(type: string): string {
  return this.workoutEmojis[type] || '🏋️'; // Default emoji if type not found
}
}
