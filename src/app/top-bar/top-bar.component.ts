import { Component, OnInit } from '@angular/core';
import {MainUserSiteComponent} from '../main-user-site/main-user-site.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent  {

  // constructor() { }
  //
  ngOnInit(): void {
  }

    constructor(private comp: MainUserSiteComponent) {
    }

    public toogleSideNav() {
        this.comp.toogleNavBar();
    }

}
