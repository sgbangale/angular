

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';



import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormcontrolComponent } from './shared/forms/formcontrol/formcontrol.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppSettingsModule } from './app-settings/app-settings.module';
import { ApiInterceptor } from './shared/ApiInterceptor';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignOutComponent } from './shared/sign-out/sign-out.component';
import { PrimaryMenuComponent } from './shared/primary-menu/primary-menu.component';
import { EntityListComponent } from './entity/entity-list/entity-list.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SecondaryMenuComponent } from './shared/secondary-menu/secondary-menu.component';
import { EntityDetailsComponent } from './entity/entity-details/entity-details.component';



export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormcontrolComponent,
    NotFoundComponent,
    SignOutComponent,
    PrimaryMenuComponent,
    EntityListComponent,
    DashboardComponent,
    SecondaryMenuComponent,
    EntityDetailsComponent,
    
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSettingsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

  ]
})
export class AppModule { }
