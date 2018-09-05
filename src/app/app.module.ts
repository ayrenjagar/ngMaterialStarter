import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { ClaimComponent } from './claim/claim.component';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { VendorMaintenanceComponent } from './vendor-maintenance/vendor-maintenance.component';
import { SecurityComponent } from './security/security.component';
import { PolicyService } from './policy.service';

const appRoutes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'product-maintenance', component: ProductMaintenanceComponent },
  { path: 'vendor-maintenance', component: VendorMaintenanceComponent },
  { path: 'security', component: SecurityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    PolicyComponent,
    ClaimComponent,
    ProductMaintenanceComponent,
    VendorMaintenanceComponent,
    SecurityComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpModule
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})



export class AppModule { }
