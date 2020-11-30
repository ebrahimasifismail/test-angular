import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { BaseComponent } from './components/dashboard/base/base.component';
import { DashbiardComponent } from './components/dashboard/dashbiard/dashbiard.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    BaseComponent,
    DashbiardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
			timeOut: 5000,
			maxOpened: 3,
			autoDismiss: true,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
			newestOnTop: true,
    }),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
		MatSortModule,
    MatExpansionModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
