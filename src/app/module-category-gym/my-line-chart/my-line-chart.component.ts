import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {formatDate} from '@angular/common';
import {TrainingDto} from '../../dataBaseObjects/TrainingDto';

interface trainingsInWeek {
    numberOfWeek: number;
    numberOfTrainings: number;
}
@Component({
    selector: 'app-my-line-chart',
    templateUrl: './my-line-chart.component.html',
    styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

    @Input() trainings: TrainingDto[] = [];

    trainingsInWeeksForChart: number[] = [];
    trainingsinWeekTab: trainingsInWeek[] = [];

    public lineChartData: ChartDataSets[] = [
        {data: this.trainingsInWeeksForChart, label: 'Liczba treningów w tygodniu tygodniu'},
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: ChartOptions = {
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    suggestedMax: 7
                }
            }]
        }
    };


    public lineChartColors: Color[] = [
        {
            borderColor: 'white',
            backgroundColor: 'rgba(250, 250, 250)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
    public lineChartPlugins = [];

    constructor() {
        let date = formatDate(new Date(), 'w', 'en-US');

        let numberWeek: number = parseInt(date);
        // numberWeek = 1;
        //calculate 15 last weeks
        for (let i = 15; i >= 0; i--) {
            let correctWeekNumber:number = numberWeek;
            if (numberWeek - i < 1) {
                correctWeekNumber = 52;
            }
            this.lineChartLabels.push((correctWeekNumber - i).toString());
            this.trainingsinWeekTab.push({numberOfWeek: correctWeekNumber-i, numberOfTrainings: 0})
        }
        // let options =  this.lineChartOptions;
        // options.scales.yAxes[0].ticks.callback = (v: number) => Math.floor(v);

    }

    ngOnInit() {
        console.log(this.trainingsinWeekTab);

        for (let training of this.trainings) {
            let date = formatDate(new Date(), 'w', 'en-US');
            let dateSixteenWeekAgo = new Date();
            let trainingDate = new Date(training.trainingDate);
            dateSixteenWeekAgo.setDate(dateSixteenWeekAgo.getDate() - 16*7);

            if (trainingDate > dateSixteenWeekAgo) {
                let weekOfTraining:number = parseInt(formatDate(training.trainingDate, 'w', 'en-US'));
                this.trainingsinWeekTab.find(e => {return e.numberOfWeek == weekOfTraining}).numberOfTrainings++;
            }

        }

        for (let i = 0; i < this.trainingsinWeekTab.length; i++) {
            this.trainingsInWeeksForChart.push(this.trainingsinWeekTab[i].numberOfTrainings)
        }

        console.log(this.trainingsInWeeksForChart);

    }

}
