import { Component, OnInit } from '@angular/core';
import { ReaderService} from './services/reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather Angular App';
  metric: any = 'Rainfall';
  location: any = 'England';
  date_from: any = '1925-01-01';
  date_to: any = '1965-01-01';
  dataLabelForChart: any = [];
  dataForChart: any = [];
  dataTypes: any = '';
  displayChart: any = false;

  constructor(public readerService: ReaderService) {}

  ngOnInit() {}

  fetchData() {

    this.displayChart = false;

    const dateFrom = new Date(this.date_from);
    const dateTo = new Date(this.date_to);
    const tempArray: any = [];
    const tempArrayData: any = [];

    this.readerService.getFullList(this.metric, this.location).subscribe(
      res => {

        for (const item in res ) {

          if ( res[item].month < 10 ) {
            res[item].month = '0' + res[item].month;
          }
            const dateListItem = new Date(res[item].year + '-' + res[item].month);

            if (dateListItem.getTime() >= dateFrom.getTime() && dateListItem.getTime() <= dateTo.getTime()) {
              tempArray.push(dateListItem.getFullYear() + '-' + dateListItem.getMonth());
              tempArrayData.push(res[item].value);
            }
        }
        this.dataLabelForChart = tempArray;
        this.dataForChart = tempArrayData;
        let sendMetric: any;

        if (this.metric === 'Rainfall') {
          sendMetric = 'Rainfall in ' + this.location;
        }
        if (this.metric === 'Tmin') {
          sendMetric = 'Minimum temperature in ' + this.location;
        }
        if (this.metric === 'Tmax') {
          sendMetric = 'Maximum temperature in ' + this.location;
        }
        this.dataTypes = sendMetric;

        if (this.dataForChart.length > 5) {
          this.displayChart = true;
        }

      }, (err) => {

      }
    );
  }
}
