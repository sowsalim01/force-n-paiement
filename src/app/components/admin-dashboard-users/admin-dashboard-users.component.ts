import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-admin-dashboard-users',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './admin-dashboard-users.component.html',
  styleUrl: './admin-dashboard-users.component.css',
  standalone: true
})
export class AdminDashboardUsersComponent {

}
