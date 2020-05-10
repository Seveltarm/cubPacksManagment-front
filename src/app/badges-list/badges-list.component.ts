import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.scss']
})
export class BadgesListComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  public indexValue: Subject<number> = new Subject();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.indexValue.next(this.tabGroup.selectedIndex);
  }

  public getTabIndex($event: MatTabChangeEvent): void {
    this.indexValue.next($event.index);
  }

}
