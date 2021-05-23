import {Component, Input, OnInit} from '@angular/core';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {FormControl} from '@angular/forms';
import {UserPlanDto} from '../../dataBaseObjects/UserPlanDto';

@Component({
  selector: 'app-goals-field',
  templateUrl: './goals-field.component.html',
  styleUrls: ['./goals-field.component.css'],
})
export class GoalsFieldComponent implements OnInit {

    @Input() userPlans: UserPlanDto[] = null;

    dataSource: mealNutritionalValInterface[]= null;
    displayedColumns: string[] = ['Nazwa', 'Kalorie', 'Kategoria', 'Dodaj1'];
    isLoadingResults = false;
    dateForm = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
