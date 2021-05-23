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


export interface UserTrainingInterface {
    data: string;
    nazwa: string;
    kategoria: string;
}

export interface PropositionTrainingInterface {
    nazwa: string;
    kategoria: string;
    kalorieSpalane: number;
    opis: string;
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


    displayedColumns: string[] = ['select', 'data', 'nazwa', 'kateogria'];
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
        this.allTrainingsData = await this.api.get(Mapping.TRAINING + Mapping.SEARCH + "userId=3");
        this.allExercisesData = await this.api.get(Mapping.EXERCISE);
        this.allCategoriesData = await this.api.get(Mapping.EXERCISE_CATEGORY);


        for (let singleTraing of this.allTrainingsData) {
            let exercise = this.allExercisesData.find(({id}) => id === singleTraing.exerciseId);
            let training:UserTrainingInterface = {
                data: singleTraing.trainingDate.toString(),
                nazwa: exercise.name,
                kategoria: exercise.exerciseCategory.name
            };
            this.dataSource.data.push(training);
        }

        for (let exercise of this.allExercisesData) {
            this.exerciseNames.push(exercise.name);
            this.exerciseCategories.push(exercise.exerciseCategory.name);

            let singleExercise: PropositionTrainingInterface = {
                nazwa: exercise.name,
                kategoria: exercise.exerciseCategory.name,
                kalorieSpalane:exercise.caloriesBurnedInMinute,
                opis: exercise.exerciseDescription
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
