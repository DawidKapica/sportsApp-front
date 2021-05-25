import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {ApiService} from '../../service/api.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    @Input() ExpertList: ExpertDto[] = [];

    @Input() ExpertCheck: ExpertDto = null;

    @Output()
    changeEvent = new EventEmitter<ExpertDto>();


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }


    sendInfromation($event: ExpertDto) {
        // console.log(expert)
        this.changeEvent.emit($event)
    }


}
