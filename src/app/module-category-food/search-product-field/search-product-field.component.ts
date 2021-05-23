import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {NutritionalProductDto} from '../../dataBaseObjects/NutritionalProductDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {FormControl} from '@angular/forms';

// export interface MealInterface {
//     nazwa: string;
//     kalorie: string;
//     kategoria: string;
// }

@Component({
    selector: 'app-search-product-field',
    templateUrl: './search-product-field.component.html',
    styleUrls: ['./search-product-field.component.css']
})
export class SearchProductFieldComponent implements OnInit, AfterViewInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input()
    nutritionalProducts: NutritionalProductDto[];

    displayedColumns: string[] = ['Nazwa', 'Kalorie', 'Kategoria', 'Dodaj1'];
    dataSource: MatTableDataSource<NutritionalProductDto> = new MatTableDataSource<NutritionalProductDto>();

    isLoadingResults = true;

    dateForm = new FormControl(new Date());

    timeForm = new FormControl();
    constructor() {
    }

    async ngOnInit() {
        this.dataSource = new MatTableDataSource<NutritionalProductDto>(this.nutritionalProducts);
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
    }
}
