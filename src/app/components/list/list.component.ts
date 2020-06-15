import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: any;
  private subscription: Subscription;

  @Input() incomingData: Subject<any>;
  @Output() searchedPhrase: EventEmitter<string> = new EventEmitter();

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.subscription = this.incomingData.subscribe(listData => {
      this.list = listData;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public filterList($event: string): void {
    this.searchedPhrase.emit($event);
  }

  public transformBaseToImage(base64Image: string) {
    if (base64Image) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
    }  
  }

}
