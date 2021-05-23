import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ApiService} from '../../service/api.service';
import {categoryEnum} from '../../categoryEnum';
import {ExerciseCategoryDto} from '../../dataBaseObjects/ExerciseCategoryDto';
import {ExerciseDto} from '../../dataBaseObjects/ExerciseDto';
import {ParameterDto} from '../../dataBaseObjects/ParameterDto';

// interface Pokemon {
//     value: string;
//     viewValue: string;
// }

// interface PokemonGroup {
//     disabled?: boolean;
//     name: string;
//     pokemon: Pokemon[];
// }

interface ExercisesGroups {
    disabled?: boolean;
    name: string;
    exercises: ExerciseDto[];
}

@Component({
    selector: 'app-add-new-training',
    templateUrl: './add-new-training.component.html',
    styleUrls: ['./add-new-training.component.css']
})


export class AddNewTrainingComponent implements OnInit {
    selected = 'option2';
    exerciseForm = new FormControl();

    isLoadingResults = true;

    categories: ExerciseCategoryDto[];
    exercises: ExerciseDto[];
    parameters: ParameterDto[];
    exercisesGroups: ExercisesGroups[] = [];
    formGroup: FormGroup = new FormGroup({});

    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    async ngOnInit() {
        await this.loadData();

        this.formGroup.addControl('name', new FormControl(''));
        this.formGroup.addControl('date', new FormControl(new Date()));
        // this.formGroup.addControl('category', new FormControl('category'));
        // this.formGroup.addControl('exercise', new FormControl('exercise'));
        this.formGroup.addControl('parameter', new FormControl(''));
        this.formGroup.addControl('parameterValue', new FormControl(''));
        this.formGroup.addControl('parameter', new FormControl(''));
        this.formGroup.addControl('secondParameterValue', new FormControl(''));
        this.formGroup.addControl('duration', new FormControl(''));

        this.isLoadingResults = false;
        this.cdRef.detectChanges();

    }

    async loadData() {
        this.categories = await this.api.get(Mapping.EXERCISE_CATEGORY);
        this.exercises = await this.api.get(Mapping.EXERCISE);
        this.parameters = await this.api.get(Mapping.PARAMETER);

        for (let singleCategory of this.categories) {
            this.exercisesGroups.push({
                name: singleCategory.name,
                exercises: []
            })
        }

        for (let singleExercises of this.exercises) {
            this.exercisesGroups.find(e => e.name == singleExercises.exerciseCategory.name).exercises.push(singleExercises);
        }
    }


}
