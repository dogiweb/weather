import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart-component',
  templateUrl: './piechart.component.html'
})
export class PiechartComponent implements OnInit{

  @Input() dataLabelForChart: any = [];
  @Input() dataForChart: any = [];
  @Input() dataTypes: any;

  displayChart: any = false;

   barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = this.dataLabelForChart;
  barChartType: any = 'bar';
  barChartLegend: any = true;
  barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 70, 20, 30, 44], label: this.dataTypes}
  ];

  ngOnInit() {
    this.displayChart = true;
    this.barChartLabels = this.dataLabelForChart;
    this.barChartData = [
      {data: this.dataForChart, label: this.dataTypes}
    ];
  }

}
