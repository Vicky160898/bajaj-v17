import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-business-data',
  templateUrl: './business-data.component.html',
  styleUrl: './business-data.component.css'
})
export class BusinessDataComponent {

  isShow: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  toggleShowDropDown(value: boolean) {
    this.isShow = value;

  }

  toggles = [
    { name: 'table 1', state: false },
    { name: 'table 2', state: false },
    { name: 'table 3', state: false },
    { name: 'table 4', state: false },
    { name: 'table 5', state: false },
    { name: 'table 6', state: false }
  ];
  

  toggle(index: number) {
    this.toggles[index].state = !this.toggles[index].state;
  
  }

  // boostrap tooltip

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Bootstrap tooltips
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }

    // Button Dropdown Toggel
    if (this.togglesdrop[0].overlay === true) {
      this.togglesdrop[0].overlay = false;
    }
  }
  // boostrap tooltip


  togglesdrop = [
    { name: 'table 1', state: false, overlay: false },
    { name: 'table 2', state: false, overlay: false },
    { name: 'table 3', state: false, overlay: false  },
    { name: 'table 4', state: false, overlay: false  },
    { name: 'table 5', state: false, overlay: false  },
    { name: 'table 6', state: false, overlay: false  },
  ];

  toggleDropdown(index: number) {
    this.togglesdrop[index].state = !this.togglesdrop[index].state;
    this.togglesdrop[index].overlay = !this.togglesdrop[index].overlay;
  }
  
}


