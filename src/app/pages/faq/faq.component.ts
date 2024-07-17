import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

}
