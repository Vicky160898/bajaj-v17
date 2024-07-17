import { Component } from '@angular/core';

@Component({
  selector: 'app-persistency',
  templateUrl: './persistency.component.html',
  styleUrl: './persistency.component.css'
})
export class PersistencyComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }
}
