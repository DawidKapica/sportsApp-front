import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {NutritionalProductDto} from '../../dataBaseObjects/NutritionalProductDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

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

    constructor() {
    }

    async ngOnInit() {
        this.dataSource = new MatTableDataSource<NutritionalProductDto>(this.nutritionalProducts);
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
