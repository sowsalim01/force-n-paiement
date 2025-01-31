import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  standalone: true
})
export class AdminDashboardComponent {

}
