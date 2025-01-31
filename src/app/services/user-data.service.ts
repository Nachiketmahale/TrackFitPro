import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  workouts: { type: string; minutes: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userData: UserData[] = [];

  private sampleData: UserData[] = [
    {
      id: 1,
      name: 'Nachiket Mahale',
      workouts: [
        { type: 'Running', minutes: 25 },
        { type: 'Cycling', minutes: 50 },
        { type: 'Yoga', minutes: 35 },
        { type: 'Swimming', minutes: 60 },
      ],
    },
    {
      id: 2,
      name: 'Sushmita More',
      workouts: [
        { type: 'Running', minutes: 60 },
        { type: 'Swimming', minutes: 40 },
      ],
    },
    {
      id: 3,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 },
      ],
    },
    {
      id: 4,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 },
      ],
    },
    {
      id: 5,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
      ],
    },
    {
      id: 6,
      name: 'Rahul Vernekar',
      workouts: [
        { type: 'Walking', minutes: 45 },
        { type: 'Cycling', minutes: 60 },
        { type: 'Yoga', minutes: 30 },
      ],
    },
    {
      id: 7,
      name: 'Sahil Pisat',
      workouts: [
        { type: 'Weightlifting', minutes: 50 },
        { type: 'Swimming', minutes: 40 },
      ],
    },
    {
      id: 8,
      name: 'Aarya Thorat',
      workouts: [
        { type: 'Cycling', minutes: 55 },
        { type: 'Running', minutes: 35 },
        { type: 'Yoga', minutes: 25 },
      ],
    },
    {
      id: 9,
      name: 'Rohit Patil',
      workouts: [
        { type: 'Boxing', minutes: 45 },
        { type: 'Weightlifting', minutes: 60 },
      ],
    },
    {
      id: 10,
      name: 'Vivek Patil',
      workouts: [
        { type: 'Other', minutes: 40 },
        { type: 'Running', minutes: 30 },
      ],
    },
  ];

  private currentDataSource: 'real' | 'sample' = 'real';
  private userSubject = new BehaviorSubject<UserData[]>(this.getUsersFromLocalStorage());
  public users$ = this.userSubject.asObservable();

  constructor() {
    const storedUsers = this.getUsersFromLocalStorage();
    this.userData = storedUsers;
  }

  private getUsersFromLocalStorage(): UserData[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  private saveUsersToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.userData));
  }

  deleteUser(userId: number): void {
    let updatedUsers;
    if (this.currentDataSource === 'real') {
      updatedUsers = this.userData.filter(user => user.id !== userId);
      this.userData = updatedUsers;
    } else {
      updatedUsers = this.sampleData.filter(user => user.id !== userId);
      this.sampleData = updatedUsers;
    }
    this.userSubject.next(this.currentDataSource === 'real' ? this.userData : this.sampleData);
    this.saveUsersToLocalStorage();
  }

  addUser(userName: string, workout: { type: string; minutes: number }) {
    const newUser: UserData = {
      id: this.generateUniqueId(),
      name: userName,
      workouts: [workout],
    };

    if (this.currentDataSource === 'real') {
      this.userData.push(newUser);
    } else {
      this.sampleData.push(newUser);
    }

    this.userSubject.next(this.currentDataSource === 'real' ? this.userData : this.sampleData);
    this.saveUsersToLocalStorage(); 
  }

  addOrUpdateUser(userName: string, workout: { type: string; minutes: number }) {
    const existingUser = this.getExistingUser(userName);

    if (existingUser) {
      const existingWorkout = existingUser.workouts.find(
        (w) => w.type === workout.type
      );
      if (existingWorkout) {
        existingWorkout.minutes += workout.minutes;
      } else {
        existingUser.workouts.push(workout);
      }
    } else {
      const newUser: UserData = {
        id: this.generateUniqueId(),
        name: userName,
        workouts: [workout],
      };
      if (this.currentDataSource === 'real') {
        this.userData.push(newUser);
      } else {
        this.sampleData.push(newUser);
      }
    }

    this.userSubject.next(this.currentDataSource === 'real' ? this.userData : this.sampleData);
    this.saveUsersToLocalStorage(); 
  }

  private generateUniqueId(): number {
    return this.currentDataSource === 'real'
      ? this.userData.length + 1
      : this.sampleData.length + 1;
  }

  private getExistingUser(userName: string): UserData | undefined {
    return this.currentDataSource === 'real'
      ? this.userData.find((user) => user.name === userName)
      : this.sampleData.find((user) => user.name === userName);
  }

  switchToSampleData(): void {
    this.currentDataSource = 'sample';
    this.userSubject.next(this.sampleData);
  }

  switchToRealData(): void {
    this.currentDataSource = 'real';
    this.userSubject.next(this.userData);
  }
}