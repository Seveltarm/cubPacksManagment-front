import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getStarsQuery = gql`
  query star ($category: Int!, $searchedPhrase: String) {
    star(category: $category, searchedPhrase: $searchedPhrase) {
      _id
      title
      description
      tasks
    }
  }
`;
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  public stars: Subject<number> = new Subject();

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getStars(this.tabGroup.selectedIndex);
  }

  public getTabIndex($event: MatTabChangeEvent): void {
    this.stars.next($event.index);
  }

  private getStars(currentIndex: number): void {
    this.apollo.query({
      query: getStarsQuery,
      variables: {
        category: currentIndex
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.stars.next(response.star);
    }, (error) => {
      console.log('error', error)
    });
  }

  public getFilteredStars($event: string): void {
    this.apollo.query({
      query: getStarsQuery,
      variables: {
        category: this.tabGroup.selectedIndex,
        searchedPhrase: $event
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.stars.next(response.star);
    }, (error) => {
      console.log('error', error)
    });
  }

}
