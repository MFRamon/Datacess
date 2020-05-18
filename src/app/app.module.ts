import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
