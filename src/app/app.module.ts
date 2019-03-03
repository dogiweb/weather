import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReaderService} from './services/reader.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './components/piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
