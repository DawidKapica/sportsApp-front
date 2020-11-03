import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExerciseDto} from '../../dataBaseObjects/ExerciseDto';
import {TrainingDto} from '../../dataBaseObjects/TrainingDto';


export interface TrainingData {
    data: string;
    nazwa: string;
    kategoria: string;
}


const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver'
];

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



export class CategoryGymComponent implements AfterViewInit, OnInit {

    displayedColumns: string[] = ['select', 'data', 'nazwa', 'kateogria'];
    dataSource: MatTableDataSource<TrainingData>;
    selection = new SelectionModel<TrainingData>(true, []);

    dataSourceExtended = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    columnsToDisplay = ['Nazwa', 'weight', 'symbol', 'position'];
    expandedElement: PeriodicElement | null;

    rerender = false;

    userTrainingsInformation: TrainingData[] = []

    allTrainingsData: TrainingDto[] = [];
    allExercisesData: ExerciseDto[] = [];


    @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
    @ViewChild(MatSort) sort: MatSort;


    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    constructor(private api: ApiService) {
        const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }



    async ngAfterViewInit() {



    }

    async ngOnInit() {
        await this.loadData();
        await this.eneablePaginators();

    }

    async loadData() {
        this.allTrainingsData = await this.api.get(Mapping.TRAINING + Mapping.SEARCH + "userId=3");
        this.allExercisesData = await this.api.get(Mapping.EXERCISE);

        for (let singleTraing of this.allTrainingsData) {
            let exercise = this.allExercisesData.find(({id}) => id === singleTraing.exerciseId);
            let training:TrainingData = {data: singleTraing.trainingDate.toString(), nazwa: exercise.name, kategoria: exercise.exerciseCategory.name}
            this.userTrainingsInformation.push(training);
        }

        console.log(this.userTrainingsInformation)
        this.rerender = true;
    }
    async eneablePaginators() {
        if (this.rerender === true) {
            this.dataSource.paginator = this.paginator.toArray()[0];
            this.dataSource.sort = this.sort;
            this.dataSourceExtended.paginator = this.paginator.toArray()[1];
        } else {
            console.log(":{")
        }
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
    checkboxLabel(row?: TrainingData): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.data + 1}`;
    }




}










function createNewUser(id: number): TrainingData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        data: id.toString(),
        nazwa: name,
        kategoria: Math.round(Math.random() * 100).toString(),
        // color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}



export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];
