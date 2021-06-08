import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OpinionDto} from '../../dataBaseObjects/OpinionDto';

@Component({
  selector: 'app-dialog-element',
  templateUrl: './dialog-element.component.html',
  styleUrls: ['./dialog-element.component.css']
})
export class DialogElementComponent implements OnInit {

  constructor( public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: OpinionDto[]) { }

  ngOnInit(): void {
      console.log(this.data)
  }

}
