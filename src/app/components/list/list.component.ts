import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getBadgesQuery = gql`
  query badges ($category: Int!) {
    badges(category: $category) {
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

  @Input() index: Subject<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private apollo: Apollo

  ) { }

  ngOnInit(): void {
    this.subscription = this.index.subscribe(selectedIndex => { 
      this.getBadges(selectedIndex);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getBadges(index: number): void {
    this.apollo.query({
      query: getBadgesQuery,
      variables: {
        category: index
      }
    }).subscribe(({ data }) => {
      const response: any = data;
      this.list = response.badges
    }, (error) => {
      console.log('error', error)
    });
  }

  public filterList($event: string) {
    this.list = this.list.filter((el: {title: string}) => {
      if (el.title.toLowerCase().includes($event)) {
        return el;
      }
  })
  }

  public transformBaseToImage(base64Image){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }

}
