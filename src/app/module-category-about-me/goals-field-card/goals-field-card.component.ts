import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-goals-field-card',
    templateUrl: './goals-field-card.component.html',
    styleUrls: ['./goals-field-card.component.css']
})
export class GoalsFieldCardComponent implements OnInit {

    @Input() planDescription = "Brak opisu";
    @Input() planTitle = "Brak tytułu";
    @Input() planEndDate = "Brak daty ukończenia";
    @Input() plan_status = 0;


    constructor() {
    }

    ngOnInit(): void {
    }

}
