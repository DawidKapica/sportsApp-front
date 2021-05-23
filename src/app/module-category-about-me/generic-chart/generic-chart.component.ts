import {Component, Input, OnInit} from '@angular/core';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {formatDate} from '@angular/common';

interface valuesInWeek {
    numberOfWeek: number;
    numberOfValue: number;
}

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {

    @Input() dateForChart: ChartDataSets[] = [];
    @Input() dataForChartLabels: Label[] = [];


    public lineChartData: ChartDataSets[] = [];
    public lineChartLabels: Label[] = [];

    // public lineChartMakroLabels: Label[] = [];

    public lineChartOptions: ChartOptions = {
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 5,
                    suggestedMax: 90
                }
            }]
        }
    };


    public lineChartColors: Color[] = [
        {
            borderColor: 'rgba(200, 200, 250, 0.5)',
            // backgroundColor: 'rgba(200, 200, 250, 0.5)',
        },
        {
            borderColor: 'rgba(100, 0, 0, 0.5)',
            // backgroundColor: 'rgba(100, 0, 0, 0.5)',
        },
        {
            borderColor: 'rgba(0, 250, 0, 0.5)',
            // backgroundColor: 'rgba(0, 250, 0, 0.5)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
    public lineChartPlugins = [];

    constructor() {

    }

    ngOnInit() {
        this.lineChartData = this.dateForChart;
        this.lineChartLabels = this.dataForChartLabels;
        // console.log(this.dataForChartLabels)
        // console.log(this.dateForChart);

    }
}
