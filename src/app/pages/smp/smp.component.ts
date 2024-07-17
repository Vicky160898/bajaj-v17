import { Component } from '@angular/core';
@Component({
  selector: 'app-smp',
  templateUrl: './smp.component.html',
  styleUrl: './smp.component.css'
})
export class SmpComponent{
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

}
