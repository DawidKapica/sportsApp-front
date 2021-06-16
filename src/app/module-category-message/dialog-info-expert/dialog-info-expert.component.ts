import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ApiService} from '../../service/api.service';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {ExpertSpecialisationDto} from '../../dataBaseObjects/ExpertSpecialisationDto';
import {SpecialisationDto} from '../../dataBaseObjects/SpecialisationDto';

@Component({
  selector: 'app-dialog-info-expert',
  templateUrl: './dialog-info-expert.component.html',
  styleUrls: ['./dialog-info-expert.component.css']
})
export class DialogInfoExpertComponent implements OnInit {
    isLoadingResults = true;

    expertInfo: ExpertDto;
    expertSpecialisations: ExpertSpecialisationDto[];
    specialisations: SpecialisationDto;
    specialisationsNames: string[] = [];


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) { }

    async ngOnInit() {
        await this.loadData();

        this.isLoadingResults = false;
        this.cdRef.detectChanges();
    }

    async loadData() {

        this.expertInfo = await this.api.getFullObject(Mapping.EXPERT + "/" + this.api.userId);
        this.expertSpecialisations = await this.api.get(Mapping.EXPERT_SPECIALISATION + Mapping.SEARCH + this.api.userId);

        for (let specialisation of this.expertSpecialisations) {
            let singleSpecialisationName: any = await this.api.getFullObject(Mapping.SPECIALISATION + '/' + specialisation.specialisationId);
            this.specialisationsNames.push(singleSpecialisationName.name);
        }
        // this.specialisations = await this.api.get(Mapping.SPECIALISATION)
        // console.log(this.userData);
        // console.log(this.userPlans);
    }

}
