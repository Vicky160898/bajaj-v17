import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-axis-bank',
  templateUrl: './axis-bank.component.html',
  styleUrl: './axis-bank.component.css'
})

export class AxisBankComponent {
  isGraphVisible: boolean = false;
  isFilterVisible: boolean = false;
  isOtherElementVisible: boolean = false;
  isMobile: boolean = false;
  isNavbar: boolean = false;

  isUserVisible: boolean = false;
 
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateChartWidth();
    // console.log(this.isMobile,'Hello')
    // console.log(this.isNavbar);
  }

  private updateChartWidth(): void {
    // Check if it's a mobile screen (adjust the breakpoint as needed)
    this.isMobile = window.innerWidth <= 991;
  
  }

  toggleShowDropDown(){
    this.isNavbar=!this.isNavbar;
    console.log(this.isNavbar)
  }

  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }

  toggleGraphVisibility() {
    this.isGraphVisible = !this.isGraphVisible;
  }
  constructor(private renderer: Renderer2, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {  }

  ngAfterViewInit() {
    // Button Dropdown Toggel
    if (this.toggles[0].overlay === true) {
      this.toggles[0].overlay = false;
    }
  }

  toggles = [
    { name: 'table 1', state: false, overlay: false },
    { name: 'table 2', state: false, overlay: false },
    { name: 'table 3', state: false, overlay: false  },
    { name: 'table 4', state: false, overlay: false  },
    { name: 'table 5', state: false, overlay: false  },
    { name: 'table 6', state: false, overlay: false  }
  ];

  toggleDropdown(index: number) {
    this.toggles[index].state = !this.toggles[index].state;
    this.toggles[index].overlay = !this.toggles[index].overlay;
  }

}
