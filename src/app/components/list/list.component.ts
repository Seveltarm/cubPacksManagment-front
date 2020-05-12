import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Subscription } from 'rxjs';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: any;
  private subscription: Subscription;
  private currentIndex: Number;

  @Input() index: Subject<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private apollo: Apollo

  ) { }

  ngOnInit(): void {
    this.subscription = this.index.subscribe(selectedIndex => {
      this.currentIndex = selectedIndex;
      this.getBadges();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getBadges(): void {
    this.apollo.query({
      query: getBadgesQuery,
      variables: {
        category: this.currentIndex
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.list = response.badges
    }, (error) => {
      console.log('error', error)
    });
  }

  public filterList($event: string) {
    this.apollo.query({
      query: getBadgesQuery,
      variables: {
        category: this.currentIndex,
        searchedPhrase: $event
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.list = response.badges
    }, (error) => {
      console.log('error', error)
    });
  }

  public transformBaseToImage(base64Image: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }

}
