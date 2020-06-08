import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title = 'app-cub-packs';
  public mobileQuery: MediaQueryList;
  public isSideNavOpened: boolean;

  private _mobileQueryListener: () => void;

  constructor(
    public router: Router,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef, 
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public toggleSideNav($event: boolean): void {
    this.isSideNavOpened = $event;
  }
  
}