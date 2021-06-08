import {Component, Input, OnInit} from '@angular/core';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {SpecialisationDto} from '../../dataBaseObjects/SpecialisationDto';
import {ExpertSpecialisationDto} from '../../dataBaseObjects/ExpertSpecialisationDto';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {PersonDto} from '../../dataBaseObjects/PersonDto';
import {OpinionDto} from '../../dataBaseObjects/OpinionDto';
import {MatDialog} from '@angular/material/dialog';
import {DialogElementComponent} from '../dialog-element/dialog-element.component';
import {SectionMainButtonsComponent} from '../../section-main-buttons/section-main-buttons.component';
import {DialogSendMessageComponent} from '../dialog-send-message/dialog-send-message.component';

@Component({
    selector: 'app-single-expert',
    templateUrl: './single-expert.component.html',
    styleUrls: ['./single-expert.component.css']
})
export class SingleExpertComponent implements OnInit {

    @Input() expert: ExpertDto = null;

    specialisations: ExpertSpecialisationDto[] = [];
    specialisationsNames: string[] = [];
    person: any; //type PersonDto
    opinions: OpinionDto[] = [];
    opinionRate: number = 0;

    isLoadingResults = true;

    constructor(private api: ApiService, public dialog: MatDialog) {
    }


    openDialog() {
        this.dialog.open(DialogElementComponent, {data: this.opinions});
    }

    openContactExpert() {
        this.dialog.open(DialogSendMessageComponent, {data: this.expert});
    }

    async ngOnInit() {
        if (this.expert != null) {
            this.specialisations = await this.api.get(Mapping.EXPERT_SPECIALISATION + Mapping.SEARCH + 'expertId=' + this.expert.id);
            this.person = await this.api.getFullObject(Mapping.PERSON + '/' + this.expert.id);
            this.opinions = await this.api.get(Mapping.OPINION + Mapping.SEARCH + 'expertId=' + this.expert.id);

            for (let specialisation of this.specialisations) {
                let singleSpecialisationName: any = await this.api.getFullObject(Mapping.SPECIALISATION + '/' + specialisation.specialisationId);
                this.specialisationsNames.push(singleSpecialisationName.name);
            }
            for (let singleOpinion of this.opinions) {
                this.opinionRate = this.opinionRate + singleOpinion.rate;
            }
            if (this.opinions.length != 0) {
                this.opinionRate = this.opinionRate / this.opinions.length;
                this.opinionRate = Math.round(this.opinionRate * 10) / 10
            }
        }
        this.isLoadingResults = false;
    }


}
