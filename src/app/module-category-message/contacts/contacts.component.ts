import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {ApiService} from '../../service/api.service';
import {UserDto} from '../../dataBaseObjects/UserDto';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    @Input() ExpertList: ExpertDto[] = [];

    @Input() ExpertCheck: ExpertDto = null;

    @Input() UserList: UserDto[] = [];

    @Input() UserCheck: UserDto = null;

    isUser = true;

    @Output()
    changeEvent = new EventEmitter<ExpertDto>();

    @Output()
    changeEventForExpert = new EventEmitter<UserDto>();


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
        this.isUser = this.api.isUser;
    }

    ngOnInit(): void {
    }


    sendInfromation($event: ExpertDto) {
        // console.log(expert)
        this.changeEvent.emit($event)
    }

    sendInformationForEpert($event: UserDto) {
        this.changeEventForExpert.emit($event);
    }


}
