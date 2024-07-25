import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-incentive-user-information',
  templateUrl: './incentive-user-information.component.html',
  styleUrl: './incentive-user-information.component.css'
})
export class IncentiveUserInformationComponent {

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
  
  // Button Dropdown Toggel
  toggles = [
    { name: 'table 1', state: false, overlay: false },
    { name: 'table 2', state: false, overlay: false },
    { name: 'table 3', state: false, overlay: false },
    { name: 'table 4', state: false, overlay: false },
    { name: 'table 5', state: false, overlay: false },
    { name: 'table 6', state: false, overlay: false },
    { name: 'table 7', state: false, overlay: false },
    { name: 'table 8', state: false, overlay: false },
    { name: 'table 9', state: false, overlay: false },
    { name: 'table 10', state: false, overlay: false },
    { name: 'table 11', state: false, overlay: false },
    { name: 'table 12', state: false, overlay: false },
    { name: 'table 13', state: false, overlay: false },
    { name: 'table 14', state: false, overlay: false },
    { name: 'table 15', state: false, overlay: false },
    { name: 'table 16', state: false, overlay: false },
    { name: 'table 17', state: false, overlay: false },
    { name: 'table 18', state: false, overlay: false },
    { name: 'table 19', state: false, overlay: false },
    { name: 'table 20', state: false, overlay: false },
  ];
  
    toggleDropdown(index: number) {
      this.toggles[index].state = !this.toggles[index].state;
      this.toggles[index].overlay = !this.toggles[index].overlay;
    }
  // Button Dropdown Toggel
  
  isDesktopVisible: boolean = true;
  toggleDesktopView() {
    this.isDesktopVisible = !this.isDesktopVisible;
  }
  
  
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
    
    // Button Dropdown Toggel
    if (this.toggles[0].overlay === true) {
      this.toggles[0].overlay = false;
    }

    // Search Filter
    if (this.togglesSearch[0].overlay === true) {
      this.togglesSearch[0].overlay = false;
    }
    
  }
  // boostrap tooltip
  
  // Button Dropdown Toggel
  policytoggles = [
    { name: 'table 1', state: false },
    { name: 'table 2', state: false },
    { name: 'table 3', state: false },
    { name: 'table 4', state: false },
    { name: 'table 5', state: false },
  ];
  
  policyDropdown(index: number) {
    this.policytoggles[index].state = !this.policytoggles[index].state;
  
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
  ];
  
  togglesTable(index: number) {
    this.togglestable[index].state = !this.togglestable[index].state;
  }
  // New Table Toggel
  
  //New Search Filter
  togglesSearch = [
    { name: 'table 1', state: false, overlay: false },
    { name: 'table 2', state: false, overlay: false },
    { name: 'table 3', state: false, overlay: false  },
    { name: 'table 4', state: false, overlay: false  },
    { name: 'table 5', state: false, overlay: false  },
    { name: 'table 6', state: false, overlay: false  },
    { name: 'table 7', state: false, overlay: false  },
    { name: 'table 8', state: false, overlay: false  },
    { name: 'table 9', state: false, overlay: false  },
    { name: 'table 10', state: false, overlay: false  },
  ];

  togglesSearchFilter(index: number) {
    this.togglesSearch[index].state = !this.togglesSearch[index].state;
    this.togglesSearch[index].overlay = !this.togglesSearch[index].overlay;
  }
  // New Search Filter
    
  
  }
  
