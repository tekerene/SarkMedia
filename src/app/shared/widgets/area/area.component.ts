import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/map';


@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Ramdom DATA'
      },
      subtitle: {
        text: 'SarkMedia'
      },
      tooltip: {
        split: true,
        valueSuffix: 'million'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name: 'Facebook',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      },{
        name:'Twitter',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Instagram',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Pinterest',
      data: [18, 31, 54, 156, 339, 818, 1201]
    },  {
      name: 'Linedin',
      data: [2, 2, 2, 6, 13, 30, 46]
    }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize')
      );
    }, 300)
  }

}
