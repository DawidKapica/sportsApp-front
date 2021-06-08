import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageDto} from '../../dataBaseObjects/MessageDto';
import {ApiService} from '../../service/api.service';
import {FormControl} from '@angular/forms';
import {Mapping} from '../../dataBaseObjects/Mapping';

@Component({
    selector: 'app-messages-display',
    templateUrl: './messages-display.component.html',
    styleUrls: ['./messages-display.component.css']
})
export class MessagesDisplayComponent implements OnInit {

    @Input() messagesExpert: MessageDto[] = [];

    @Input()expertId: number;

    isLoading: boolean = false;

    messageToSend: FormControl = new FormControl('');

    isUser = true;


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
        this.isUser = this.api.isUser;
    }

    ngOnInit(): void {
        this.messagesExpert.sort((a, b) => (a.id > b.id) ? 1 : -1)
        console.log(this.messagesExpert)
        this.isLoading = false;
        this.cdRef.detectChanges();
    }

    messagesToDisplay(messagesList: MessageDto[], expertId: number) {

        console.log(messagesList)
        this.isLoading = true;
        this.cdRef.detectChanges();

        this.messagesExpert = messagesList;
        this.expertId = expertId;
        this.isLoading = false;
        this.cdRef.detectChanges();

    }

    sendMessage() {

        if(this.isUser==true) {
            let message: MessageDto = {
                isUserSender: true,
                expertId: this.expertId,
                userId: this.api.userId,
                content: this.messageToSend.value,
                time: null
            }
            this.api.post(Mapping.MESSAGES, message);

            this.messagesExpert.push(message);
            this.cdRef.detectChanges();

            this.messageToSend.setValue('');
        } else {
            let message: MessageDto = {
                isUserSender: false,
                expertId: this.api.userId,
                userId: this.expertId,
                content: this.messageToSend.value,
                time: null
            }
            this.api.post(Mapping.MESSAGES, message);

            this.messagesExpert.push(message);
            this.cdRef.detectChanges();

            this.messageToSend.setValue('');
        }

    }

}
