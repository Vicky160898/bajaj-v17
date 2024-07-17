import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, Renderer2  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import ApexCharts from 'apexcharts';
import { DOCUMENT } from '@angular/common';
import { ChartConfiguration,Legend } from 'chart.js';

@Component({
  selector: 'app-axis-business-graph',
  templateUrl: './axis-business-graph.component.html',
  styleUrl: './axis-business-graph.component.css'
})
export class AxisBusinessGraphComponent {
  public isBrowser: boolean;
  
  isShow: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer2: Renderer2) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
    public barChartLegend = true;
    public barChartPlugins = [];
  
    public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels:  ['1-5', '6-11', '12-17', '18-23', '24-30'] ,
      datasets: [
        {   data: [44, 55, 31, 47, 31], 
          label: 'Series A',
          backgroundColor: ['rgba(0, 114, 188, 0.9)'],
        hoverBackgroundColor:['#0072BC'],
        hoverBorderColor:['#0072BC'] ,
      },
      
      ]
    };
  
    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
        },
        y: {
          grid: {
            display: true, // Hide the y-axis grid lines
          },
        },
      },
      elements: {
          bar: {
            borderRadius: {
              topLeft: 5, // Adjust the border radius of the top left corner
              topRight: 5, // Adjust the border radius of the top right corner
            },
          },
        },
    };


    public barChartDataYtd: ChartConfiguration<'bar'>['data'] = {
      labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] ,
      datasets: [
        {   data: [44, 55, 31, 47, 31, 11,10,15,65, 25, 11, 42], 
          label: 'Series A',
          backgroundColor: ['rgba(0, 114, 188, 0.9)'],
        hoverBackgroundColor:['#0072BC'],
        hoverBorderColor:['#0072BC'] ,
      },
      
      ]
    };
  
    public barChartOptionsYtd: ChartConfiguration<'bar'>['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
        },
        y: {
          grid: {
            display: true, // Hide the y-axis grid lines
          },
        },
      },
      elements: {
          bar: {
            borderRadius: {
              topLeft: 5, // Adjust the border radius of the top left corner
              topRight: 5, // Adjust the border radius of the top right corner
            },
          },
        },
    };


    public barChartDataProductYtd: ChartConfiguration<'bar'>['data'] = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Series 1',
          data: [44, 55, 31, 47, 31, 11,10,15,65, 25, 11, 42],
          backgroundColor: '#9cd9ff'
        },
        {
          label: 'Series 2',
          data: [24, 25, 50, 70, 13, 41,55,48,50, 38, 51, 22],
          backgroundColor: '#449fda'
        },
        {
          label: 'Series 3',
          data: [44, 55, 31, 47, 31, 11,10,15,65, 25, 11, 42],
          backgroundColor: '#0072bc'
        },
        {
          label: 'Series 4',
          data: [24, 25, 50, 70, 13, 41,55,48,50, 38, 51, 22],
          backgroundColor: '#005388'
        },
        {
          label: 'Series 5',
          data: [44, 55, 31, 47, 31, 11,10,15,65, 25, 11, 42],
          backgroundColor: '#002c48'
        },
     
      ]
    };
    
    public barChartOptionsProductYtd: ChartConfiguration<'bar'>['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'right'
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          grid: {
            display: true
          }
        }
      },
     
    };
  toggleShowDropDown(value: boolean) {
      this.isShow = value;

  }


  


public doughnutChartLabelsNew: string[] = [ 'Series1', 'Series2', 'Series3', 'Series4', 'Series5' ];

public doughnutChartDatasetsNew: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  { data: [ 44, 55, 31, 47, 31 ], 
    label: 'Series A',
    backgroundColor: ['#9cd9ff', '#449fda', '#0072bc', '#005388', '#002c48'],
    hoverBackgroundColor:['#9cd9ff', '#449fda', '#0072bc', '#005388', '#002c48'],
    hoverBorderColor:['#9cd9ff', '#449fda', '#0072bc', '#005388', '#002c48'] ,
  },
  ];

public doughnutChartOptionsNew: ChartConfiguration<'doughnut'>['options'] = {
  responsive: false,
  plugins: {
    legend: {
      display: false, // Hide legend for doughnut chart
    },
  },
};



ngOnInit(): void {
}

ngAfterViewInit(): void {

}

togglesdrop = [
  { name: 'table 1', state: false },
  { name: 'table 2', state: false },
  { name: 'table 3', state: false },
  { name: 'table 4', state: false },
  { name: 'table 5', state: false },
  { name: 'table 6', state: false }
];

toggleDropdown(index: number) {
  this.togglesdrop[index].state = !this.togglesdrop[index].state;

}
}
