import { Component  } from '@angular/core';
@Component({
  selector: 'app-incentive',
  templateUrl: './incentive.component.html',
  styleUrl: './incentive.component.css',
})
export class IncentiveComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

}

