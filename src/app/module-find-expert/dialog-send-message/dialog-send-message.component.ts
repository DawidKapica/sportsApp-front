import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OpinionDto} from '../../dataBaseObjects/OpinionDto';
import {ApiService} from '../../service/api.service';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {FormControl} from '@angular/forms';
import {MessageDto} from '../../dataBaseObjects/MessageDto';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-dialog-send-message',
    templateUrl: './dialog-send-message.component.html',
    styleUrls: ['./dialog-send-message.component.css']
})
export class DialogSendMessageComponent implements OnInit {

    messageToSend: FormControl = new FormControl('');

    constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: ExpertDto, private api: ApiService,  private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    sendMessage() {
        let message: MessageDto = {
            isUserSender: true,
            expertId: this.data.id,
            userId: this.api.userId,
            content: this.messageToSend.value,
            time: null
        }
        this.api.post(Mapping.MESSAGES, message);

        this.openSnackBar();
    }

    openSnackBar() {
        this._snackBar.open("Wiadomość do eksperta została wysłana, kontakt został nawiązany", 'Zamknij', {duration:7000});
    }

}
