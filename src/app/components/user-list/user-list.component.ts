import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class UserListComponent {
  users: any[] = [];

  constructor(private readonly dataService: DataService) {
    this.users = this.dataService.getData();
  }
}
