import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {UserDetailDto} from '../../dataBaseObjects/UserDetailDto';
import {formatDate} from '@angular/common';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

interface valuesInWeek {
    numberOfWeek: number;
    numberOfValue: number;
    numberOfEntries: number;
}

@Component({
    selector: 'app-measeaure-chart-history-field',
    templateUrl: './measeaure-chart-history-field.component.html',
    styleUrls: ['./measeaure-chart-history-field.component.css']
})
export class MeaseaureChartHistoryFieldComponent implements OnInit {

    @Input()
    userDetailsData: UserDetailDto[] = [];

    dateForChartWeight: ChartDataSets[] = [];
    dataForChartLabelsWeight: Label[] = [];

    dataForChartUpBody: ChartDataSets[] = [];
    dataForChartLabelsUpBody: Label[] = [];

    dataForChartDownBody: ChartDataSets[] = [];
    dataForChartLabelsDownBody: Label[] = [];

    weightInWeekTab: valuesInWeek[] = [];
    weightInWeeksForChart: number[] = [];

    circumferenceAbdomenInWeekTab: valuesInWeek[] = [];
    circumferenceAbdomenInWeeksForChart: number[] = [];

    bicepsCircumferenceInWeekTab: valuesInWeek[] = [];
    bicepsCircumferenceInWeeksForChart: number[] = [];

    forearmCircumferenceInWeekTab: valuesInWeek[] = [];
    forearmCircumferenceInWeeksForChart: number[] = [];

    chestCircumferenceInWeekTab: valuesInWeek[] = [];
    chestCircumferenceInWeeksForChart: number[] = [];

    hipCircumferenceInWeekTab: valuesInWeek[] = [];
    hipCircumferenceInWeeksForChart: number[] = [];

    thighCircumferenceInWeekTab: valuesInWeek[] = [];
    thighCircumferencInWeeksForChart: number[] = [];

    calfCircumferenceInWeekTab: valuesInWeek[] = [];
    calfCircumferenceInWeeksForChart: number[] = [];

    neckCircumferenceInWeekTab: valuesInWeek[] = [];
    neckCircumferenceInWeeksForChart: number[] = [];

    isLoadingData = true;

    constructor() {
        let date = formatDate(new Date(), 'w', 'en-US');

        let numberWeek: number = parseInt(date);

        for (let i = 15; i >= 0; i--) {
            let correctWeekNumber: number = numberWeek;
            if (numberWeek - i < 1) {
                correctWeekNumber = 52;
            }
            this.dataForChartLabelsWeight.push((correctWeekNumber - i).toString());
            this.dataForChartLabelsUpBody.push((correctWeekNumber - i).toString());
            this.dataForChartLabelsDownBody.push((correctWeekNumber - i).toString());


            this.weightInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.circumferenceAbdomenInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.bicepsCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.forearmCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.chestCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.hipCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.thighCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.calfCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
            this.neckCircumferenceInWeekTab.push({numberOfWeek: correctWeekNumber - i, numberOfValue: 0, numberOfEntries: 0});
        }
    }

    ngOnInit(): void {
        // console.log(this.userDetailsData);

        for (let measure of this.userDetailsData) {
            let date = formatDate(new Date(), 'w', 'en-US');
            let dateSixteenWeekAgo = new Date();
            let measureDate = new Date(measure.valueDate);
            dateSixteenWeekAgo.setDate(dateSixteenWeekAgo.getDate() - 16 * 7);
            if (measureDate > dateSixteenWeekAgo) {
                let weekOfFood: number = parseInt(formatDate(measure.valueDate, 'w', 'en-US'));
                let indexOfMeasure = this.weightInWeekTab.findIndex(e => {
                    return e.numberOfWeek == weekOfFood;
                });
                // console.log(measure);
                // console.log(indexOfMeasure)
                this.weightInWeekTab[indexOfMeasure].numberOfValue = this.weightInWeekTab[indexOfMeasure].numberOfValue + measure.weight;
                this.weightInWeekTab[indexOfMeasure].numberOfEntries++;


                this.circumferenceAbdomenInWeekTab[indexOfMeasure].numberOfValue = this.circumferenceAbdomenInWeekTab[indexOfMeasure].numberOfValue + measure.circumferenceAbdomen;
                this.circumferenceAbdomenInWeekTab[indexOfMeasure].numberOfEntries++;

                this.bicepsCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.bicepsCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.bicepsCircumference;
                this.bicepsCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;

                this.forearmCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.forearmCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.forearmCircumference;
                this.forearmCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;

                this.chestCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.chestCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.chestCircumference;
                this.chestCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;

                this.neckCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.neckCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.neckCircumference;
                 this.neckCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;


                this.hipCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.hipCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.hipCircumference;
                this.hipCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;

                this.thighCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.thighCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.thighCircumference;
                this.thighCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;

                this.calfCircumferenceInWeekTab[indexOfMeasure].numberOfValue = this.calfCircumferenceInWeekTab[indexOfMeasure].numberOfValue + measure.calfCircumference;
                 this.calfCircumferenceInWeekTab[indexOfMeasure].numberOfEntries++;


            }
        }
        console.log(this.weightInWeekTab);
        for (let i = 0; i < this.weightInWeekTab.length; i++) {
            if (this.weightInWeekTab[i].numberOfEntries != 0) {
                console.log("if");
                this.weightInWeeksForChart.push((this.weightInWeekTab[i].numberOfValue / this.weightInWeekTab[i].numberOfEntries));
            } else {
                console.log("else");

                this.weightInWeeksForChart.push(0);
            }
            if (this.circumferenceAbdomenInWeekTab[i].numberOfEntries != 0) {
                this.circumferenceAbdomenInWeeksForChart.push((this.circumferenceAbdomenInWeekTab[i].numberOfValue / this.circumferenceAbdomenInWeekTab[i].numberOfEntries));
            } else {
                this.circumferenceAbdomenInWeeksForChart.push(0);
            }
            if (this.forearmCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.bicepsCircumferenceInWeeksForChart.push((this.forearmCircumferenceInWeekTab[i].numberOfValue / this.forearmCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.bicepsCircumferenceInWeeksForChart.push(0);
            }
            if (this.chestCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.chestCircumferenceInWeeksForChart.push((this.chestCircumferenceInWeekTab[i].numberOfValue / this.chestCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.chestCircumferenceInWeeksForChart.push(0);
            }
            if (this.hipCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.hipCircumferenceInWeeksForChart.push((this.hipCircumferenceInWeekTab[i].numberOfValue / this.hipCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.hipCircumferenceInWeeksForChart.push(0);
            }
            if (this.thighCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.thighCircumferencInWeeksForChart.push((this.thighCircumferenceInWeekTab[i].numberOfValue / this.thighCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.thighCircumferencInWeeksForChart.push(0);
            }
            if (this.calfCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.calfCircumferenceInWeeksForChart.push((this.calfCircumferenceInWeekTab[i].numberOfValue / this.calfCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.calfCircumferenceInWeeksForChart.push(0);
            }
            if (this.neckCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.neckCircumferenceInWeeksForChart.push((this.neckCircumferenceInWeekTab[i].numberOfValue / this.neckCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.neckCircumferenceInWeeksForChart.push(0);
            }
            if (this.forearmCircumferenceInWeekTab[i].numberOfEntries != 0) {
                this.forearmCircumferenceInWeeksForChart.push((this.forearmCircumferenceInWeekTab[i].numberOfValue / this.forearmCircumferenceInWeekTab[i].numberOfEntries));
            } else {
                this.forearmCircumferenceInWeeksForChart.push(0);
            }
        }
        // console.log(this.weightInWeeksForChart)
        this.dateForChartWeight = [
            {data: this.weightInWeeksForChart, label: 'Średnia waga w danym tygodniu'}
        ];

        this.dataForChartUpBody = [
            {data: this.circumferenceAbdomenInWeeksForChart, label: 'Obwód brzucha'},
            {data: this.bicepsCircumferenceInWeeksForChart, label: 'Obwód bicepsa'},
            {data: this.chestCircumferenceInWeeksForChart, label: 'Obwód klatki piersiowej'},
            {data: this.neckCircumferenceInWeeksForChart, label: 'Obwód szyi'},
            {data: this.forearmCircumferenceInWeeksForChart, label: 'Obwód przedramienia'},
        ];

        this.dataForChartDownBody = [
            {data: this.hipCircumferenceInWeeksForChart, label: 'Obwód bioder'},
            {data: this.thighCircumferencInWeeksForChart, label: 'Obwó∂ uda'},
            {data: this.calfCircumferenceInWeeksForChart, label: 'Obwód łydki'},

        ];

        this.isLoadingData = false;

        console.log(this.dateForChartWeight);
        console.log(this.dataForChartLabelsWeight);
    }

}
