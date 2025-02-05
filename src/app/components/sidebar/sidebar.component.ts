import { Component, OnInit, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { UserDataService, UserData } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {
  @Input() sidebarOpen: boolean = false;
  @Output() toggle = new EventEmitter<void>(); 
  @Output() sidebarChangeEvent: EventEmitter<string> = new EventEmitter<string>(); 

  users: UserData[] = [];
  sidebarSelected = 'All';
  screenWidth: number = window.innerWidth;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.users$.subscribe(users => {
      this.users = users;
    });
  }

  sidebarChange(selected: string): void {
    this.sidebarSelected = selected;
    this.sidebarChangeEvent.emit(this.sidebarSelected); 
    if (this.screenWidth < 768) {
      this.closeSidebar();
    }
  }

  toggleSidebar(): void {
    this.toggle.emit();
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
    this.toggle.emit();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenWidth = window.innerWidth;
  }
}
