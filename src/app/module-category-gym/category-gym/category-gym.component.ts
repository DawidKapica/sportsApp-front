import {AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExerciseDto} from '../../dataBaseObjects/ExerciseDto';
import {TrainingDto} from '../../dataBaseObjects/TrainingDto';
import {GenericInputFieldComponent} from '../generic-input-field/generic-input-field.component';
import {AbstractControl, FormBuilder, FormControl} from '@angular/forms';
import {ParameterDto} from '../../dataBaseObjects/ParameterDto';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {single} from 'rxjs/operators';
import {TrainingValueDto} from '../../dataBaseObjects/TrainingValueDto';


export interface UserTrainingInterface {
    data: string;
    nazwa: string;
    kategoria: string;
    name?: string;
    parameterFirst?: ParameterDto;
    parameterFirstVal?: number;
    parameterSecond?: ParameterDto;
    parameterSecondVal?: number;
    description?: string;
}

export interface PropositionTrainingInterface {
    nazwa: string;
    kategoria: string;
    kalorieSpalane: number;
    opis: string;
    measurment?: ParameterDto;
}

export interface TableNames {
    name: string;
    value: string
}

@Component({
    selector: 'app-category-gym',
    templateUrl: './category-gym.component.html',
    styleUrls: ['./category-gym.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})



export class CategoryGymComponent implements AfterViewInit {

    @ViewChild('nameExerciseInput') nameExerciseInput: GenericInputFieldComponent;
    @ViewChild('categoryExerciseInput') categoryExerciseInput: GenericInputFieldComponent;
    @ViewChild('caloriesExerciseInput') caloriesExerciseInput: GenericInputFieldComponent;


    // displayedColumns: string[] = ['data', 'nazwa', 'kateogria', 'select'];
    displayedColumns: string[] = ['data', 'nazwa', 'kategoria'];
    displayedColumnsHeader:string[] = ['Data', 'Nazwa', 'Kategoria'];

    dataSource: MatTableDataSource<UserTrainingInterface> = new MatTableDataSource<UserTrainingInterface>();
    selection = new SelectionModel<UserTrainingInterface>(true, []);



    dataSourceExtended = new MatTableDataSource<PropositionTrainingInterface>();
    columnsToDisplay = ['nazwa', 'kategoria', 'kalorieSpalane'];
    columnsHeaderNames = ['Nazwa', 'Kategoria', 'Spalane Kalorie'];
    expandedElement: PropositionTrainingInterface | null;


    readonly formControl: AbstractControl;

    // columnsToDisplay: TableNames[] = [
    //     {name: 'nazwa', value: 'Nazwa'},
    //     {name: 'kategoria', value: 'Kategoria'},
    //     {name: 'spaloneKalorie', value: 'Spalane kalorie'}];
    isLoadingResults = true;

    allTrainingsData: TrainingDto[] = [];
    allExercisesData: ExerciseDto[] = [];
    allCategoriesData: string[] = [];

    exerciseNames: string[] = [];
    exerciseCategories: string[] = [];
    parameters: ParameterDto[] = [];

    @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
    @ViewChild(MatSort) sort: MatSort;



    constructor(formBuilder: FormBuilder, private cdRef: ChangeDetectorRef, private api: ApiService) {
        this.dataSourceExtended.filterPredicate = ((data, filter) => {
            const a = !filter.nazwa || data.nazwa.toLowerCase().includes(filter.nazwa);
            const b = !filter.kategoria || data.kategoria.toLowerCase().includes(filter.kategoria);
            const c = !filter.kalorieSpalane || data.kalorieSpalane >= filter.kalorieSpalane;
            return a && b && c;
        }) as (PeriodicElement, string) => boolean;

        this.formControl = formBuilder.group({
            nazwa: '',
            kategoria: '',
            kalorieSpalane: '',
        });
        this.formControl.valueChanges.subscribe(value => {
            let filter = {...value, nazwa: value.nazwa.toLowerCase()} as string;
            this.dataSourceExtended.filter = filter;
        });
    }

    async ngAfterViewInit() {

        await this.loadData();
        await this.eneablePaginators();
    }

    async loadData() {
        this.allTrainingsData = await this.api.get(Mapping.TRAINING + Mapping.SEARCH + "userId=" + this.api.userId);
        this.allExercisesData = await this.api.get(Mapping.EXERCISE);
        this.allCategoriesData = await this.api.get(Mapping.EXERCISE_CATEGORY);
        this.parameters = await this.api.get(Mapping.PARAMETER);


        for (let singleTraing of this.allTrainingsData) {
            let exercise = this.allExercisesData.find(({id}) => id === singleTraing.exerciseId);
            let paramFirst: ParameterDto = null;
            let valueFirst = null;
            let paramSecond: ParameterDto = null;
            let valueSecond = null;
            let description = null;
            if (singleTraing.trainingValuesId != null) {
                let trainingVal: TrainingValueDto = await this.api.getFullObject(Mapping.TRAINING_VALUES + "/" + singleTraing.trainingValuesId) as TrainingValueDto;

                if (trainingVal.parameterId != null) {
                    paramFirst = this.parameters.filter(e => e.id == trainingVal.parameterId)[0];
                    valueFirst = trainingVal.value;
                }
                if (trainingVal.secondParameterId != null) {
                    paramSecond = this.parameters.filter(e => e.id == trainingVal.secondParameterId)[0];
                    valueSecond = trainingVal.secondValue;
                }
                description = trainingVal.description
            }
            let training:UserTrainingInterface = {
                data: singleTraing.trainingDate.toString(),
                nazwa: exercise.name,
                kategoria: exercise.exerciseCategory.name,
                name: singleTraing.name,
                parameterFirst: paramFirst,
                parameterFirstVal: valueFirst,
                parameterSecond: paramSecond,
                parameterSecondVal: valueSecond,
                description: description
            };
            this.dataSource.data.push(training);
        }
        console.log(this.dataSource)

        for (let exercise of this.allExercisesData) {
            this.exerciseNames.push(exercise.name);
            this.exerciseCategories.push(exercise.exerciseCategory.name);
            let param: ParameterDto = this.parameters.filter(e => e.id == exercise.parameterId)[0];
            let singleExercise: PropositionTrainingInterface = {
                nazwa: exercise.name,
                kategoria: exercise.exerciseCategory.name,
                kalorieSpalane:exercise.caloriesBurnedInMinute*60,
                opis: exercise.exerciseDescription,
                measurment: param
            };
            this.dataSourceExtended.data.push(singleExercise);
        }

        this.isLoadingResults = false;
    }


    async eneablePaginators() {
            this.dataSource.paginator = this.paginator.toArray()[0];
            this.dataSource.sort = this.sort;
            this.dataSourceExtended.paginator = this.paginator.toArray()[1];

    }

    findTraining() {
        let url: string = "";
        let nameOFExercise = this.nameExerciseInput.valueInput;
        let categoryOfExercise = this.categoryExerciseInput.valueInput;
        let caloriesOfExercises = this.caloriesExerciseInput.valueInput;

        // this.api.get(Mapping.EXERCISE + Mapping.SEARCH + "name=" + nameOFExercise )

        console.log(nameOFExercise);
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: UserTrainingInterface): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.data + 1}`;
    }

    openDialog() {
        // const dialogRef = this.dialog.open(AddApplicantDialogComponent, {
        //     width: '90%',
        //     height: '65%',
        //     position: {top: '5%'}
        // });
        //
        // dialogRef.afterClosed().subscribe(r => console.log('The dialog was closed'));
    }

}
