import {ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
export class SearchProductFieldComponent implements OnInit {

    @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
    @ViewChild(MatSort) sort: MatSort;

    @Input()
    nutritionalProducts: NutritionalProductDto[];

    displayedColumns: string[] = ['Nazwa', 'Kalorie', 'Kategoria', 'Dodaj1'];
    dataSource: MatTableDataSource<NutritionalProductDto> = new MatTableDataSource<NutritionalProductDto>();

    isLoadingResults = true;

    constructor(private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<NutritionalProductDto>(this.nutritionalProducts);
        // this.eneablePaginators();

    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    // async eneablePaginators() {
    //     this.dataSource.paginator = this.paginator.toArray()[0];
    //     this.dataSource.sort = this.sort;
    //     // this.dataSourceExtended.paginator = this.paginator.toArray()[1];
    // }
}
