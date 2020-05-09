import { Component, OnInit, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getBadgesQuery = gql`
  query {
    badges {
      _id
      title
      description
    }
  }  
`;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: any;
  private subscription: Subscription;

  @Input() index: Subject<any>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    if (this.index) {
      this.subscription = this.index.subscribe(selectedIndex => { 
        this.getBadges(selectedIndex);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getBadges(index: number): void {
    this.apollo.query({
      query: getBadgesQuery
    }).subscribe(({ data }) => {
      const response: any = data;
      this.list = response.badges
    }, (error) => {
      console.log('error', error)
    });
  }

}
