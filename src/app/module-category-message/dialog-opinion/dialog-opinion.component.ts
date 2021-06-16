import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OpinionDto} from '../../dataBaseObjects/OpinionDto';
import {FormControl} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {Mapping} from '../../dataBaseObjects/Mapping';

@Component({
  selector: 'app-dialog-opinion',
  templateUrl: './dialog-opinion.component.html',
  styleUrls: ['./dialog-opinion.component.css']
})
export class DialogOpinionComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: ExpertDto, private api: ApiService) { }
    value = 0;

  formControlSlider = new FormControl();
  formControlOpinion = new FormControl("");
  formControlTitle = new FormControl("");


  ngOnInit(): void {
  }

  sendOpinion() {
      let opinion: OpinionDto = {
          content: this.formControlOpinion.value,
          userId: this.api.userId,
          expertId: this.data.id,
          rate: this.value
      }

      this.api.post(Mapping.OPINION, opinion);
  }

}
