import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  private searchSubject: Subject<string> = new Subject();

  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  
  constructor() {
    this.setSearchSubscription();
  }

  public updateSearch(searchTextValue: string) {
    this.searchSubject.next(searchTextValue);
  }

  private setSearchSubscription() {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.searchValue.emit( searchValue );
    });
  }

  ngOnDestroy() {
    this.searchSubject.unsubscribe();
  }

}
