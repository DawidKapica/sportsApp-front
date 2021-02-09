import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';

@Component({
  selector: 'app-find-expert',
  templateUrl: './find-expert.component.html',
  styleUrls: ['./find-expert.component.css']
})
export class FindExpertComponent implements OnInit {

  constructor(private api: ApiService) { }

  experts: ExpertDto;

  async ngOnInit() {
      this.experts = await this.api.get(Mapping.EXPERT);


  }

}
