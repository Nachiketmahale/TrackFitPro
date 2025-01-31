import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,ReactiveFormsModule,CommonModule,SelectButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greeting: string = '';

  formGroup: FormGroup;
  stateOptions = [
    { label: 'Dynamic Data', value: 'real' },
    { label: 'Static Data', value: 'sample' },
  ];

  constructor(private fb: FormBuilder, private userDataService: UserDataService) {
    this.formGroup = this.fb.group({
      toggle: ['real'], 
    });
  }

  onToggleChange(event: any): void {
    const selectedValue = event.value;
    if (selectedValue === 'sample') {
      this.userDataService.switchToSampleData();
    } else {
      this.userDataService.switchToRealData();
    }
  }

  ngOnInit(): void {
    this.setGreeting();
  }

  setGreeting(): void {
    const hours = new Date().getHours();
    if (hours < 12) {
      this.greeting = 'Morning,';
    } else if (hours < 18) {
      this.greeting = 'Afternoon,';
    } else {
      this.greeting = 'Evening,';
    }
  }
}
