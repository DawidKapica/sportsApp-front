import {Component, Input, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-new-mesaurement',
    templateUrl: './new-mesaurement.component.html',
    styleUrls: ['./new-mesaurement.component.css']
})
export class NewMesaurementComponent implements OnInit {

    @Input() dataSource: doubleInformationAndType[] = [];
    formGroup: FormGroup = new FormGroup({});

    constructor() {

    }

    ngOnInit(): void {
        for (const x of this.dataSource) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }
    }

}
