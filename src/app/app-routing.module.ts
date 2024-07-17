import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessComponent } from "./pages/business/business.component";
import { IncentiveComponent } from "./pages/incentive/incentive.component";
import { GoalsheetComponent } from "./pages/goalsheet/goalsheet.component";
import { DashboardComponent } from "./common/dashboard/dashboard.component";
import { SmpComponent } from "./pages/smp/smp.component";
import { PersistencyComponent } from "./pages/persistency/persistency.component";
import { DeadComponent } from "./pages/dead/dead.component";
import { PerformancematricsComponent } from "./pages/performancematrics/performancematrics.component";
import { LoginComponent } from "./pages/login/login.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AxisBankComponent } from "./pages/business/axis-bank/axis-bank.component";
import { UserInformationComponent } from './pages/performancematrics/user-information/user-information.component';


const routes: Routes = [
  { path: "business", component: BusinessComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "incentive", component: IncentiveComponent },
  { path: "goal", component: GoalsheetComponent },
  { path: "smp-report", component: SmpComponent },
  { path: "persistency", component: PersistencyComponent },
  { path: "performance-matrices", component: PerformancematricsComponent },
  { path: "dead-business", component: DeadComponent },
  { path: "faq", component: FaqComponent },
  { path: "profile", component: ProfileComponent },
  { path: "axis-bank", component: AxisBankComponent },
  { path: "user-information", component: UserInformationComponent },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
