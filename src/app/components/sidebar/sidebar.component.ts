import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { UserDataService,UserData } from '../../services/user-data.service';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  users: UserData[] = [];

  sidebarSelected = 'All';

  @Output() sidebarChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  sidebarChange(selected: string): void {
    this.sidebarSelected = selected;
    this.sidebarChangeEvent.emit(this.sidebarSelected);
  };

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    
    this.userDataService.users$.subscribe((users) => {
      this.users = users;
    });
  }
}
