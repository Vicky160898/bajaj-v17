import { Component } from "@angular/core";
import { TicketraiseComponent } from "./common/ticketraise/ticketraise.component";

@Component({
  selector: "app-root",
  // standalone: true,
  // imports: [TicketraiseComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "test2";
}
