import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {MessageDto} from '../../dataBaseObjects/MessageDto';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {MatSidenav} from '@angular/material/sidenav';
import {MessagesDisplayComponent} from '../messages-display/messages-display.component';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {MatDialog} from '@angular/material/dialog';
import {DialogElementComponent} from '../../module-find-expert/dialog-element/dialog-element.component';
import {DialogOpinionComponent} from '../dialog-opinion/dialog-opinion.component';
import {DialogInfoExpertComponent} from '../dialog-info-expert/dialog-info-expert.component';

@Component({
    selector: 'app-category-message',
    templateUrl: './category-message.component.html',
    styleUrls: ['./category-message.component.css']
})
export class CategoryMessageComponent implements OnInit {

    @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

    @ViewChild('messageDisplay') messageDisplay: MessagesDisplayComponent;

    @Input() makeExpertContact: ExpertDto;

    isUser = true;

    constructor(private cdRef: ChangeDetectorRef, private api: ApiService, public dialog: MatDialog) {
        this.isUser = this.api.isUser;
    }

    messages: MessageDto[] = [];
    expertsList: ExpertDto[] = [];
    ExpertChosen: ExpertDto = null;

    userList: UserDto[] = [];
    userChosen: UserDto = null;

    isLoadingResults = true;
    isCollapsed = false;


    async ngOnInit() {
        if (this.isUser == true) {
        this.messages = await this.api.get(Mapping.MESSAGES + Mapping.SEARCH + Mapping.USERID + this.api.userId);

        let unique = new Set(this.messages.map(item => item.expertId));

        for (let expertId of unique) {
            let expert: any = await this.api.getFullObject(Mapping.EXPERT + '/' + expertId)
            this.expertsList.push(expert);
            console.log(expertId);
        }
        // unique.forEach(async function(value) {
        //     this.expertsList.push(await this.api.get(Mapping.EXPERT + value));
        // });

        let messagesWithExpert: MessageDto[] = [];
        if(this.expertsList != null && this.expertsList != []) {

            let expertDirstId = this.expertsList[0].id
            for (let messageSingle of this.messages) {
                if(messageSingle.expertId == expertDirstId) {
                    messagesWithExpert.push(messageSingle);
                }
            }
            this.messageDisplay.messagesToDisplay(messagesWithExpert, expertDirstId);
            this.ExpertChosen = this.expertsList[0];
        }



        this.isLoadingResults = false;
        this.cdRef.detectChanges();
        } else {
            this.messages = await this.api.get(Mapping.MESSAGES + Mapping.SEARCH + "expertId=" + this.api.userId);
            // console.log(this.messages);
            let unique = new Set(this.messages.map(item => item.userId));

            for (let userId of unique) {
                let user: any = await this.api.getFullObject(Mapping.USER + '/' + userId)
                // console.log(user);
                this.userList.push(user);
            }


            let messagesWithExpert: MessageDto[] = [];
            if(this.userList != null && this.userList != []) {

                let expertDirstId = this.userList[0].id
                for (let messageSingle of this.messages) {
                    if(messageSingle.userId == expertDirstId) {
                        messagesWithExpert.push(messageSingle);
                    }
                }
                this.messageDisplay.messagesToDisplay(messagesWithExpert, expertDirstId);
                this.userChosen = this.userList[0];
            }

            this.isLoadingResults = false;
            this.cdRef.detectChanges();
        }
    }

    public toogleSideNav() {
        this.sidenav.toggle();
        this.isCollapsed = !this.isCollapsed;

    }

    changeOther($event: ExpertDto): void {
        let messagesWithExpert: MessageDto[] = [];

        console.log($event)
        for (let messageSingle of this.messages) {
            if(messageSingle.expertId == $event.id) {
                messagesWithExpert.push(messageSingle);
            }
        }

        this.ExpertChosen = $event;

        this.messageDisplay.messagesToDisplay(messagesWithExpert, $event.id);

        // this.messageDisplay.changeCategory($event)
    }

    openDialog() {
        this.dialog.open(DialogOpinionComponent, {data: this.ExpertChosen});

    }

    openDialogExpert() {
        this.dialog.open(DialogInfoExpertComponent, {data: this.api.userId});

    }


}
