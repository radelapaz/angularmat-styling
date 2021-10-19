import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, NgZone, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public showFiller = false;
  public isScreenSmall: boolean;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
  constructor(private breakpointObserver : BreakpointObserver) {
    // this.breakpointObserver
    // .observe([Breakpoints.XSmall])
    this.breakpointObserver
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT})`])
   }

  ngOnInit(zone: NgZone): void { 
    this.mediaMatcher.addEventListener(mql =>
      zone.run(() => this.mediaMatcher = mql));

  }
  
  isScreenSmall(): boolean{
    return this.mediaMatcher.matches;
  }

}
