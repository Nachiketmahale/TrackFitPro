import { Component } from '@angular/core';

import { UserDataService } from '../../services/user-data.service';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule,FormsModule,ButtonModule,DialogModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  name = '';
  workoutType = '';
  workoutMinutes = 0;
  workoutTypes = ['Running', 'Swimming', 'Yoga','Cycling' , 'Walking','Weightlifting','Boxing','Other'];
  visible = false;

  @Output() nameFilterChange = new EventEmitter<string>();
  @Output() workoutFilterChange = new EventEmitter<string>();

  constructor(private userDataService: UserDataService) {}

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  cancelModal() {
    this.name = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    this.hideDialog();
  }

  addWorkout() {
    if (this.name && this.workoutType && this.workoutMinutes > 0) {

      const formattedName = this.capitalizeWords(this.name);
      const formattedWorkoutType = this.capitalizeWords(this.workoutType);
  
      this.userDataService.addOrUpdateUser(formattedName, {
        type: formattedWorkoutType,
        minutes: this.workoutMinutes,
      });
  

      this.name = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
      this.hideDialog();
    }
  }
  
  capitalizeWords(input: string): string {
    return input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  

  onNameFilterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.nameFilterChange.emit(value); 
  }

  onWorkoutFilterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.workoutFilterChange.emit(value); 
  }
}
