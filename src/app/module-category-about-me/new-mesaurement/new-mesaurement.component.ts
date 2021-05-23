import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-new-mesaurement',
    templateUrl: './new-mesaurement.component.html',
    styleUrls: ['./new-mesaurement.component.css']
})
export class NewMesaurementComponent implements OnInit {

    @Input() dataSource: doubleInformationAndType[] = [];
    @Input() lastMeasureUpdate: Date = null;

    userDataInfoFirstCol: doubleInformationAndType[] = [];
    userDataInfoSecondCol: doubleInformationAndType[] = [];
    formGroup: FormGroup = new FormGroup({});
    isLoadingResults = true;

    constructor(private cdRef: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        let inputTableLen = this.dataSource.length;
        let firstColLen = Math.ceil((inputTableLen/2));
        let sndColLen = Math.floor((inputTableLen/2));

        for (let i = 0; i < firstColLen; i++) {
            this.userDataInfoFirstCol.push(this.dataSource[i]);
        }

        for (let i = firstColLen; i < firstColLen+sndColLen; i++) {
            this.userDataInfoSecondCol.push(this.dataSource[i]);
        }

        for (const x of this.dataSource) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }

        this.isLoadingResults = false;
    }

}
