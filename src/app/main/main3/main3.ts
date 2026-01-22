import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../chart-data';
declare var Chart: any;
@Component({
  selector: 'app-main3',
  imports: [],
  templateUrl: './main3.html',
  styleUrl: './main3.scss',
})
export class Main3 {
  constructor(private chartdata: ChartData) {}
  ngOnInit(): void {
    new Chart(document.getElementById('chart1'), {
      type: 'bar',
      data: {
        labels: [
          { year: 2010, count: 10 },
          { year: 2011, count: 20 },
          { year: 2012, count: 15 },
          { year: 2013, count: 25 },
          { year: 2014, count: 22 },
          { year: 2015, count: 30 },
          { year: 2016, count: 28 },
        ].map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: [
              { year: 2010, count: 10 },
              { year: 2011, count: 20 },
              { year: 2012, count: 15 },
              { year: 2013, count: 25 },
              { year: 2014, count: 22 },
              { year: 2015, count: 30 },
              { year: 2016, count: 28 },
            ].map((row) => row.count),
          },
        ],
      },
    });

    new Chart(document.getElementById('chart2'), {
      type: 'bar',
      data: {
        labels: this.chartdata.months({ count: 3 }),
        datasets: [
          {
            label: 'Dataset 1',
            data: this.chartdata.numbers({ count: 3, min: -100, max: 100 }),
            backgroundColor: this.chartdata.CHART_COLORS.red,
          },
          {
            label: 'Dataset 2',
            data: this.chartdata.numbers({ count: 3, min: -100, max: 100 }),
            backgroundColor: this.chartdata.CHART_COLORS.blue,
          },
          {
            label: 'Dataset 3',
            data: this.chartdata.numbers({ count: 3, min: -100, max: 100 }),
            backgroundColor: this.chartdata.CHART_COLORS.green,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
    new Chart(document.getElementById('chart3'), {
      type: 'bar',
      data: {
        labels: this.chartdata.months({ count: 3 }),
        datasets: [
          {
            label: 'Dataset 1',
            data: this.chartdata.numbers({ count: 3, min: -100, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.red,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.red, 0.5),
          },
          {
            label: 'Dataset 2',
            data: this.chartdata.numbers({ count: 3, min: -100, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.blue,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.blue, 0.5),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      },
    });
    const DATA_COUNT = 12;
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
      labels.push(i.toString());
    }
    const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
    console.log('show');
    new Chart(document.getElementById('chart4'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'A',
            data: datapoints,
            borderColor: this.chartdata.CHART_COLORS.red,
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            label: 'B',
            data: datapoints,
            borderColor: this.chartdata.CHART_COLORS.blue,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'C',
            data: datapoints,
            borderColor: this.chartdata.CHART_COLORS.green,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Line Chart - Cubic interpolation mode',
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
            suggestedMin: -10,
            suggestedMax: 200,
          },
        },
      },
    });

    new Chart(document.getElementById('chart5'), {
      type: 'line',
      data: {
        labels: this.chartdata.months({ count: 7 }),
        datasets: [
          {
            label: 'Dataset 1',
            data: this.chartdata.numbers({ count: 7, min: -100, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.red,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.red, 0.5),
          },
          {
            label: 'Dataset 2',
            data: this.chartdata.numbers({ count: 7, min: -100, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.blue,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.blue, 0.5),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      },
    });
    //
    new Chart(document.getElementById('chart6'), {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Dataset 1',
            data: this.chartdata.bubbles({ count: 7, rmin: 5, rmax: 15, min: 0, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.red,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.red, 0.5),
          },
          {
            label: 'Dataset 2',
            data: this.chartdata.bubbles({ count: 7, rmin: 5, rmax: 15, min: 0, max: 100 }),
            borderColor: this.chartdata.CHART_COLORS.orange,
            backgroundColor: this.chartdata.transparentize(this.chartdata.CHART_COLORS.orange, 0.5),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bubble Chart',
          },
        },
      },
    });
    //
    new Chart(document.getElementById('chart7'), {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: this.chartdata.numbers({ count: DATA_COUNT, min: 0, max: 100 }),
            backgroundColor: Object.values(this.chartdata.CHART_COLORS),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart',
          },
        },
      },
    });
  }
}
