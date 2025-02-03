import { Component, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  name: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  workoutTypes: string[] = [
    'Running', 'Swimming', 'Yoga', 'Cycling', 'Walking', 
    'Weightlifting', 'Boxing', 'Other'
  ];
  visible: boolean = false;

  @Output() nameFilterChange = new EventEmitter<string>();
  @Output() workoutFilterChange = new EventEmitter<string>();

  constructor(private userDataService: UserDataService) {}

  showDialog(): void {
    this.visible = true;
  }

  hideDialog(): void {
    this.visible = false;
  }

  cancelModal(): void {
    this.resetForm();
    this.hideDialog();
  }

  addWorkout(): void {
    if (this.name && this.workoutType && this.workoutMinutes > 0) {
      const formattedName = this.capitalizeWords(this.name);
      const formattedWorkoutType = this.capitalizeWords(this.workoutType);

      this.userDataService.addOrUpdateUser(formattedName, {
        type: formattedWorkoutType,
        minutes: this.workoutMinutes,
      });

      this.resetForm();
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
    this.nameFilterChange.emit((event.target as HTMLInputElement).value);
  }

  onWorkoutFilterChange(event: Event): void {
    this.workoutFilterChange.emit((event.target as HTMLInputElement).value);
  }

  private resetForm(): void {
    this.name = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
