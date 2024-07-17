import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


declare var bootstrap: any;

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent {
  isUserVisible: boolean = false;
  isMobile: boolean = false;
  isNavbar: boolean = false;
  // showFilter: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

  toggleShowDropDown(){
    this.isNavbar=!this.isNavbar;
    console.log(this.isNavbar)
  }

  // toggleDiv() {
  //   this.showFilter = !this.showFilter;
  // }
  

   // boostrap tooltip

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

   ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Bootstrap tooltips
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }
  // boostrap tooltip
  
// Button Dropdown Toggel
  toggles = [
    { name: 'table 1', state: false },
    { name: 'table 2', state: false },
    { name: 'table 3', state: false },
    { name: 'table 4', state: false },
    { name: 'table 5', state: false },
    { name: 'table 6', state: false },
    { name: 'table 7', state: false },
    { name: 'table 8', state: false },
    { name: 'table 9', state: false },
    { name: 'table 10', state: false },
    { name: 'table 11', state: false },
    { name: 'table 12', state: false },
    { name: 'table 13', state: false },
    { name: 'table 14', state: false },
    { name: 'table 15', state: false },
    { name: 'table 16', state: false },
    { name: 'table 17', state: false },
    { name: 'table 18', state: false },
    { name: 'table 19', state: false },
    { name: 'table 20', state: false },
  ];

  toggleDropdown(index: number) {
    this.toggles[index].state = !this.toggles[index].state;
  
  }
// Button Dropdown Toggel

//New Table Toggel
  togglestable = [
    { name: 'table 1', state: false },
    { name: 'table 2', state: false },
    { name: 'table 3', state: false },
    { name: 'table 4', state: false },
    { name: 'table 5', state: false },
    { name: 'table 6', state: false },
    { name: 'table 7', state: false },
    { name: 'table 8', state: false },
    { name: 'table 9', state: false },
    { name: 'table 10', state: false },
    { name: 'table 11', state: false },
    { name: 'table 12', state: false },
    { name: 'table 13', state: false },
    { name: 'table 14', state: false },
    { name: 'table 15', state: false },
    { name: 'table 16', state: false },
    { name: 'table 17', state: false },
    { name: 'table 18', state: false },
    { name: 'table 19', state: false },
    { name: 'table 20', state: false },
  ];

  togglesTable(index: number) {
    this.togglestable[index].state = !this.togglestable[index].state;
  }
// New Table Toggel

//New Search Filter
togglesSearch = [
  { name: 'table 1', state: false },
  { name: 'table 2', state: false },
  { name: 'table 3', state: false },
  { name: 'table 4', state: false },
  { name: 'table 5', state: false },
  { name: 'table 6', state: false },
  { name: 'table 7', state: false },
  { name: 'table 8', state: false },
  { name: 'table 9', state: false },
  { name: 'table 10', state: false },
];

togglesSearchFilter(index: number) {
  this.togglesSearch[index].state = !this.togglesSearch[index].state;
}
// New Search Filter

}
