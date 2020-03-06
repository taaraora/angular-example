import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements AfterViewInit {

  @ViewChild('drawer') drawer;

  @Output()
  public matDrawerEventEmitter = new EventEmitter<MatDrawer>();

  showFiller = false;
  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.drawer);
    this.matDrawerEventEmitter.emit(this.drawer);
  }

}
