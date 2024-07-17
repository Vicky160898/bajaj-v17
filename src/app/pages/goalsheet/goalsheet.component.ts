import { Component } from '@angular/core';

@Component({
  selector: 'app-goalsheet',
  templateUrl: './goalsheet.component.html',
  styleUrl: './goalsheet.component.css'
})
export class GoalsheetComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

}
