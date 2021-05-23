import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';

@Component({
    selector: 'app-find-sport-facility',
    templateUrl: './find-sport-facility.component.html',
    styleUrls: ['./find-sport-facility.component.css']
})
export class FindSportFacilityComponent implements OnInit {
    isLoadingResults = true;

    sportFacilities: any;

    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    async ngOnInit() {
        await this.loadData();

        this.isLoadingResults = false;
        this.cdRef.detectChanges();
    }

    async loadData() {
        this.sportFacilities = await this.api.get(Mapping.SPORT_FACILITY);

    }

}
