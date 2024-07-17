import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  isMobile: boolean = false;
  isNavbar: boolean = false;
  isModel: boolean = false;

  showButton = false;

  constructor() {}

  openModal() {
    // const modeldiv = document.getElementById("exampleModalCenter");
    this.isModel = true;
    console.log("function called.", this.isModel);
  }

  closeModal() {
    this.isModel = false;
    console.log("Modal closed.", this.isModel);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any): void {
    this.updateChartWidth();
    // console.log(this.isMobile,'Hello')
    // console.log(this.isNavbar);
  }

  private updateChartWidth(): void {
    // Check if it's a mobile screen (adjust the breakpoint as needed)
    this.isMobile = window.innerWidth <= 991;
  }

  toggleShowNavbar(value: boolean) {
    this.isNavbar = value;
    // console.log(this.isNavbar);
  }

  ngOnInit() {}

  isNavWidth = true;
  isLayOver = true;

  toggleNavLeft() {
    this.isNavWidth = !this.isNavWidth;
    this.isLayOver = !this.isLayOver;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the scroll position is more than 500px
    this.showButton = window.pageYOffset > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
