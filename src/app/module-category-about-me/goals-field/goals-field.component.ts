import {Component, Input, OnInit} from '@angular/core';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {FormControl} from '@angular/forms';
import {UserPlanDto} from '../../dataBaseObjects/UserPlanDto';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';

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
    titleForm = new FormControl("");
    textForm = new FormControl("");

  constructor(private _snackBar: MatSnackBar, private api: ApiService) { }

  ngOnInit(): void {
  }

  addPlan() {
    let newPlan: UserPlanDto = {
        goalStatus: 0,
        endDate: this.dateForm.value,
        description: this.textForm.value,
        title: this.titleForm.value,
        startDate: new Date(),
        userId: this.api.userId

      };
      this.api.post(Mapping.USER_PLANS, newPlan);
  }


    openSnackBar() {
        this._snackBar.open("Dodano nowy plan", 'Zamknij', {duration:7000});
    }



}
