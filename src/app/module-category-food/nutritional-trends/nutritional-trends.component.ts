import {Component, Input, OnInit} from '@angular/core';
import {TrainingDto} from '../../dataBaseObjects/TrainingDto';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {formatDate} from '@angular/common';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

interface valuesInWeek {
    numberOfWeek: number;
    numberOfValue: number;
}

@Component({
  selector: 'app-nutritional-trends',
  templateUrl: './nutritional-trends.component.html',
  styleUrls: ['./nutritional-trends.component.css']
})
export class NutritionalTrendsComponent implements OnInit {

    @Input() eatenFoods: mealNutritionalValInterface[] = [];

    caloriesInWeeksForChart: number[] = [];
    caloriesInWeekTab: valuesInWeek[] = [];

    proteinsInWeeksForChart: number[] = [];
    proteinsInWeekTab: valuesInWeek[] = [];

    carboInWeeksForChart: number[] = [];
    carboInWeekTab: valuesInWeek[] = [];

    fatInWeeksForChart: number[] = [];
    fatInWeekTab: valuesInWeek[] = [];

    public lineChartData: ChartDataSets[] = [
        {data: this.caloriesInWeeksForChart, label: 'Średnia liczba kalorii zjedzona w tygodniu'},
    ];

    public lineChartMakroData: ChartDataSets[] = [
        {data: this.proteinsInWeeksForChart, label: 'Białka[g]'},
        {data: this.fatInWeeksForChart, label: 'Tłuszcze[g]'},
        {data: this.carboInWeeksForChart, label: 'Węglowodany[g]'},
    ];
    public lineChartLabels: Label[] = [];

    // public lineChartMakroLabels: Label[] = [];

    public lineChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 100,
                    suggestedMax: 900
                }
            }]
        }
    };

    public lineChartMakroOptions: ChartOptions = {
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 20,
                    suggestedMax: 100
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

    public lineChartMakroColors: Color[] = [
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
        let date = formatDate(new Date(), 'w', 'en-US');

        let numberWeek: number = parseInt(date);

        for (let i = 15; i >= 0; i--) {
            let correctWeekNumber:number = numberWeek;
            if (numberWeek - i < 1) {
                correctWeekNumber = 52;
            }
            this.lineChartLabels.push((correctWeekNumber - i).toString());
            this.caloriesInWeekTab.push({numberOfWeek: correctWeekNumber-i, numberOfValue: 0});
            this.fatInWeekTab.push({numberOfWeek: correctWeekNumber-i, numberOfValue: 0});
            this.proteinsInWeekTab.push({numberOfWeek: correctWeekNumber-i, numberOfValue: 0})
            this.carboInWeekTab.push({numberOfWeek: correctWeekNumber-i, numberOfValue: 0})
        }

    }

    ngOnInit() {
        for (let eatenFood of this.eatenFoods) {
            let date = formatDate(new Date(), 'w', 'en-US');
            let dateSixteenWeekAgo = new Date();
            let foodDate = new Date(eatenFood.consumedFoodDate);
            dateSixteenWeekAgo.setDate(dateSixteenWeekAgo.getDate() - 16*7);
            if (foodDate > dateSixteenWeekAgo) {

                let weekOfFood:number = parseInt(formatDate(eatenFood.consumedFoodDate, 'w', 'en-US'));
                let indexOfFood = this.caloriesInWeekTab.findIndex(e => {return e.numberOfWeek == weekOfFood});
                this.caloriesInWeekTab[indexOfFood].numberOfValue = this.caloriesInWeekTab[indexOfFood].numberOfValue + eatenFood.calories;
                this.fatInWeekTab[indexOfFood].numberOfValue = this.fatInWeekTab[indexOfFood].numberOfValue + eatenFood.fats;
                this.proteinsInWeekTab[indexOfFood].numberOfValue = this.proteinsInWeekTab[indexOfFood].numberOfValue + eatenFood.proteins;
                this.carboInWeekTab[indexOfFood].numberOfValue = this.carboInWeekTab[indexOfFood].numberOfValue + eatenFood.carbohydrates;

            }

        }

        for (let i = 0; i < this.caloriesInWeekTab.length; i++) {
            this.caloriesInWeeksForChart.push((this.caloriesInWeekTab[i].numberOfValue/7));
            this.fatInWeeksForChart.push((this.fatInWeekTab[i].numberOfValue/7));
            this.proteinsInWeeksForChart.push((this.proteinsInWeekTab[i].numberOfValue/7));
            this.carboInWeeksForChart.push((this.carboInWeekTab[i].numberOfValue/7));

        }
    }
}
