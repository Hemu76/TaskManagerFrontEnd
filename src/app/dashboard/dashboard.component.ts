import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isCollapsed = true;
  showSubNav1 = false;
  showSubNav2 = false;
  userName = 'Hemu'
  userRole = 'Admin'
  toggleCollapse() {
    console.log('Hiiii')
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubNav1() {
    this.showSubNav1 = !this.showSubNav1;
    this.isCollapsed = this.isCollapsed;
  }

  toggleSubNav2() {
    this.showSubNav2 = !this.showSubNav2;
    this.isCollapsed = this.isCollapsed;
  }
}
