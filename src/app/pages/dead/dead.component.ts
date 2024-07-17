import { Component } from '@angular/core';

@Component({
  selector: 'app-dead',
  templateUrl: './dead.component.html',
  styleUrl: './dead.component.css'
})
export class DeadComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

}
