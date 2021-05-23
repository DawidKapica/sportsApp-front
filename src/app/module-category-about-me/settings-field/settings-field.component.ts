import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../../dataBaseObjects/UserDto';

@Component({
    selector: 'app-settings-field',
    templateUrl: './settings-field.component.html',
    styleUrls: ['./settings-field.component.css']
})
export class SettingsFieldComponent implements OnInit {

    @Input()
    userData: UserDto;

    constructor() {
    }

    ngOnInit(): void {
    }

}
