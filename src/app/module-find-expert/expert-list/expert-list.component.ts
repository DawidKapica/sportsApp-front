import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';

@Component({
    selector: 'app-expert-list',
    templateUrl: './expert-list.component.html',
    styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

    @Input() dataSource: ExpertDto[] = [];

    constructor(private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {


    }

    setDataSource(dataSource: ExpertDto[]) {
        this.dataSource = dataSource;
        this.cdRef.detectChanges();
    }

}
