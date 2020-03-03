import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.scss']
})
export class BadgesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getBadges($event) {
    console.log($event, 'add badges list download')
  }

}
