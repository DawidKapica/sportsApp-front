import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {NutritionalProductDto} from '../../dataBaseObjects/NutritionalProductDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {FormControl} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {UserTrainingInterface} from '../../module-category-gym/category-gym/category-gym.component';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';

interface NutritionalProductCheck extends NutritionalProductDto {
    isChecked: boolean;
}

@Component({
    selector: 'app-search-product-field',
    templateUrl: './search-product-field.component.html',
    styleUrls: ['./search-product-field.component.css']
})
export class SearchProductFieldComponent implements OnInit, AfterViewInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input()
    nutritionalProducts: NutritionalProductCheck[];

    @Output()
    changeEvent = new EventEmitter<ConsumedFoodDto>();

    displayedColumns: string[] = ['Nazwa', 'Kalorie', 'Kategoria', 'Dodaj'];
    dataSource: MatTableDataSource<NutritionalProductCheck> = new MatTableDataSource<NutritionalProductCheck>();

    isLoadingResults = true;

    dateForm = new FormControl(new Date());

    selection = new SelectionModel<NutritionalProductCheck>(true, []);

    timeForm = new FormControl();
    constructor(private api: ApiService, private cdRef: ChangeDetectorRef, private _snackBar: MatSnackBar) {
    }

    async ngOnInit() {
        this.dataSource = new MatTableDataSource<NutritionalProductCheck>(this.nutritionalProducts);
        const index = this.nutritionalProducts.findIndex(e => e.name == 'water');
        if (index > -1) {
            this.nutritionalProducts.splice(index, 1);
        }
        this.isLoadingResults = false;
    }

    async ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        console.log(this.selection)
    }

    checkboxLabel(row?: NutritionalProductCheck): string {
        if (!row) {
        }
        // console.log("${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fatValue + 1}")
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fatValue + 1}`;
    }

    // addMealToDatabse() {
    //     for(let selectionRow of this.selection.selected)
    //     let meal:ConsumedFoodDto = {
    //         userId: this.api.userId,
    //         nutritionalProductId: selectionRow
    //     }
    // }

    addMeal() {
        // console.log(this.dataSource.data)

        for (let meal of this.dataSource.data) {
            if (meal.isChecked == true) {
                let singleConsumedFood: ConsumedFoodDto = {
                    userId: this.api.userId,
                    nutritionalProductId : meal.id,
                    quantity: 1,
                    consumedFoodDate: this.dateForm.value,
                    consumedFoodTime: this.timeForm.value
                };
                this.api.post(Mapping.CONSUMED_FOOD, singleConsumedFood);
                this.sendInfromation(singleConsumedFood);
            }
        }

        this.openSnackBar();



    }


    openSnackBar() {
        this._snackBar.open("Twój posiłek został dodany", 'Zamknij', {duration:7000} );
    }

    sendInfromation($event: ConsumedFoodDto) {
        // console.log(expert)
        console.log($event)
        this.changeEvent.emit($event)
    }

}
