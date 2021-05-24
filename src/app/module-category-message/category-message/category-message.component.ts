import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {MessageDto} from '../../dataBaseObjects/MessageDto';
import {Mapping} from '../../dataBaseObjects/Mapping';

@Component({
    selector: 'app-category-message',
    templateUrl: './category-message.component.html',
    styleUrls: ['./category-message.component.css']
})
export class CategoryMessageComponent implements OnInit {

    constructor(private cdRef: ChangeDetectorRef, private api: ApiService) {
    }

    messages: MessageDto[];
    expertsList

    isLoadingResults = true;


    async ngOnInit() {
        this.messages = await this.api.get(Mapping.MESSAGES + Mapping.SEARCH + Mapping.USERID + this.api.userId);

        this.isLoadingResults = false;
        this.cdRef.detectChanges();
    }



}
