import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SensorsComponent } from './sensors/sensors.component';
import { AddPTCFormComponent } from './modals/add-ptcform/add-ptcform.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';
import { UpdateFrequencyComponent } from './modals/update-frequency/update-frequency.component';
import { UpdateTimeIntervalComponent } from './modals/update-time-interval/update-time-interval.component';
import { UpdateRangeComponent } from './modals/update-range/update-range.component';
import { DeleteConfirmationComponent } from './modals/delete-confirmation/delete-confirmation.component';
import { AddPTCFormRXComponent } from './modals/add-ptcform-rx/add-ptcform-rx.component';
import { AwsFormComponent } from './modals/aws-form/aws-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    SideNavigationComponent,
    SensorsComponent,
    AddPTCFormComponent,
    SensorDetailComponent,
    UpdateFrequencyComponent,
    UpdateTimeIntervalComponent,
    UpdateRangeComponent,
    DeleteConfirmationComponent,
    AddPTCFormRXComponent,
    AwsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
