import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {SportFacilitiesDto} from '../../dataBaseObjects/SportFacilitiesDto';
import {ExpertListComponent} from '../../module-find-expert/expert-list/expert-list.component';
import {MapComponent} from '../map/map.component';

interface searchFilter {
    isPaid: boolean
    name: string,
    category: string,
}

@Component({
    selector: 'app-find-sport-facility',
    templateUrl: './find-sport-facility.component.html',
    styleUrls: ['./find-sport-facility.component.css']
})
export class FindSportFacilityComponent implements OnInit {
    isLoadingResults = true;

    sportFacilities: any;

    @ViewChild('mapSport') mapSport: MapComponent;

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

    async searchSportFacilities($event: searchFilter) {
        // this.api.post()
        console.log($event);

        let sportFacilityTab: SportFacilitiesDto[] = [];
        if ($event.isPaid == null) {
            if ($event.name != "" && $event.name != null && $event.name != undefined && $event.name != "undefined" && $event.category != null && $event.category != "" && $event.category != undefined && $event.category != "undefined") {
                let sportFacilityTrue = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=true" + "&sportFacilitiesCategory=" + $event.category + "&name=" + $event.name);
                let sportFacilityFalse = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=false" + "&sportFacilitiesCategory=" + $event.category + "&name=" + $event.name);
                let x  = sportFacilityTab.concat(sportFacilityTrue);
               let y = sportFacilityTab.concat(sportFacilityFalse)
                sportFacilityTab = y;
            } else if ($event.name != "" && $event.name != null && $event.name != undefined && $event.name != "undefined") {
                let sportFacilityTrue = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=true" + "&name=" + $event.name);
                let sportFacilityFalse = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=false" + "&name=" + $event.name);
                let x  = sportFacilityTab.concat(sportFacilityTrue);
                let y = sportFacilityTab.concat(sportFacilityFalse)
                sportFacilityTab = y;
            } else if ($event.category != null && $event.category != "" && $event.category != undefined && $event.category != "undefined") {
                let sportFacilityTrue = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=true" + "&sportFacilitiesCategory=" + $event.category);
                let sportFacilityFalse = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=false" + "&sportFacilitiesCategory=" + $event.category);
                let x  = sportFacilityTab.concat(sportFacilityTrue);
                let y = sportFacilityTab.concat(sportFacilityFalse)
                sportFacilityTab = y;
            } else {
                let sportFacilityTrue = await this.api.get(Mapping.SPORT_FACILITY);
                let sportFacilityFalse = await this.api.get(Mapping.SPORT_FACILITY);
                sportFacilityTab.push(sportFacilityTrue);

            }

        } else {
            if ($event.name != "" && $event.name != null && $event.name != undefined && $event.category != null && $event.category != "" && $event.category != undefined) {
                let sportFacility = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=" + $event.isPaid + "&sportFacilitiesCategory=" + $event.category + "&name=" + $event.name);
                sportFacilityTab = (sportFacility);
            } else if ($event.name != "" && $event.name != null && $event.name != undefined && $event.name != "undefined") {
                let sportFacility = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=" + $event.isPaid + "&name=" + $event.name);
                console.log(sportFacility);

                sportFacilityTab = (sportFacility);
            } else if ($event.category != null && $event.category != "" && $event.category != undefined && $event.category != "undefined") {
                let sportFacility = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=" + $event.isPaid + "&sportFacilitiesCategory=" + $event.category );
                console.log(sportFacility);

                sportFacilityTab = (sportFacility);
            } else {
                let sportFacility = await this.api.get(Mapping.SPORT_FACILITY + Mapping.SEARCH + "isPaid=" + $event.isPaid );
                console.log(sportFacility);

                sportFacilityTab = (sportFacility);
            }
        }
        this.mapSport.changeValues(sportFacilityTab);
        console.log(sportFacilityTab);
    }

}
