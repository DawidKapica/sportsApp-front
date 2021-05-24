import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserPlanDto} from '../../dataBaseObjects/UserPlanDto';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-goals-field-card',
    templateUrl: './goals-field-card.component.html',
    styleUrls: ['./goals-field-card.component.css']
})
export class GoalsFieldCardComponent implements OnInit {

    @Input() plan: UserPlanDto;
    @Input() planDescription = 'Brak opisu';
    @Input() planTitle = 'Brak tytułu';
    @Input() planEndDate = 'Brak daty ukończenia';
    @Input() plan_status = 0;


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    async change(value: number ) {
        this.plan.goalStatus = value;

        let x = await this.api.put(Mapping.USER_PLANS + '/' + this.plan.id, this.plan );
        this.plan_status = value;
        await this.api.delete(Mapping.USER_PLANS + '/' + this.plan.id);
        this.plan = x;

        this.cdRef.detectChanges();


    }






}
