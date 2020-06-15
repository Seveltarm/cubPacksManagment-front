import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getBadgesQuery = gql`
  query badges ($category: Int!, $searchedPhrase: String) {
    badges(category: $category, searchedPhrase: $searchedPhrase) {
      _id
      title
      description
      tasks
      comment
      logo
    }
  }
`;
@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.scss']
})
export class BadgesListComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  public badges: Subject<number> = new Subject();

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getBadges(this.tabGroup.selectedIndex)
  }

  public getTabIndex($event: MatTabChangeEvent): void {
    this.getBadges($event.index);
  }
  
  private getBadges(currentIndex: number): void {
    this.apollo.query({
      query: getBadgesQuery,
      variables: {
        category: currentIndex
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.badges.next(response.badges);
    }, (error) => {
      console.log('error', error)
    });
  }

  public getFilteredBadges($event: string): void {
    this.apollo.query({
      query: getBadgesQuery,
      variables: {
        category: this.tabGroup.selectedIndex,
        searchedPhrase: $event
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.badges.next(response.badges);
    }, (error) => {
      console.log('error', error)
    });
  }

}
