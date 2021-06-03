import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {ExpertListComponent} from '../expert-list/expert-list.component';
import {$e} from 'codelyzer/angular/styles/chars';

interface searchFilter {
    phone: string,
    mail: string,
    firstName: string,
    secondName: string,
    specialisation: number[],
    minExp: number
}
interface singleSpec {
    specialisationId: number,
    experienceYear: number
}
interface searchSpec {
    searchSpecialisations: singleSpec[];
}

@Component({
    selector: 'app-find-expert',
    templateUrl: './find-expert.component.html',
    styleUrls: ['./find-expert.component.css']
})
export class FindExpertComponent implements OnInit {

    @ViewChild('expertList') expertList: ExpertListComponent;

    constructor(private api: ApiService) {
    }

    experts: ExpertDto;


    async ngOnInit() {
        this.experts = await this.api.get(Mapping.EXPERT);


    }

    async  searchExperts($event: searchFilter) {
        // this.api.post()
        let singleSpecTab: singleSpec[] = [];

        if ($event.specialisation != null) {
            let exp = 0;
            if ($event.minExp != null && $event.minExp > 0) {
                exp = $event.minExp;
            }
            for (let i = 0; i < $event.specialisation.length; i++) {
                singleSpecTab.push({
                    specialisationId: $event.specialisation[i],
                    experienceYear: exp
                })
            }
        }
        let specToSearch: searchSpec = {
            searchSpecialisations: singleSpecTab
        };

        let searchedExperts:ExpertDto[] = await this.api.post(Mapping.EXPERT + Mapping.SEARCH, specToSearch);

        console.log(searchedExperts);
        if($event.phone != null && $event.phone != '') {
            searchedExperts = searchedExperts.filter(e => e.phone.toString() == $event.phone)
        }
        if($event.firstName != null && $event.firstName != '') {
            searchedExperts = searchedExperts.filter(e => e.firstName.toString() == $event.firstName)
        }
        if($event.secondName != null && $event.secondName != '') {
            searchedExperts = searchedExperts.filter(e => e.firstName.toString() == $event.secondName)
        }
        if($event.mail != null && $event.mail != '') {
            searchedExperts = searchedExperts.filter(e => e.mail.toString() == $event.mail)
        }

        this.expertList.setDataSource(searchedExperts);

    }

}
