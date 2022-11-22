import { Component, OnInit } from '@angular/core';
import dataSharer from './util/data-sharer';
import eventService from './util/event-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-simple';
  
  homeVisible = true;
  page1Visible = false;
  page2Visible = false;

  ngOnInit() {
    eventService.registerCallback(dataSharer.events.setVisiblePage, () => this.setVisiblePage());
    this.recoverVisiblePage();
  }

  recoverVisiblePage() {
    dataSharer.visiblePage = sessionStorage.getItem('visiblePage') || 'home';
    this.setVisiblePage();
  }

  setVisiblePage() {
    this.cleanVisible();
    switch (dataSharer.visiblePage) {
      case 'home':
        this.homeVisible = true;
        break;
      case 'page1':
        this.page1Visible = true;
        break;
        case 'page2':
          this.page2Visible = true;
    }
    sessionStorage.setItem('visiblePage', dataSharer.visiblePage);
  }

  cleanVisible() {
    this.homeVisible = false;
    this.page1Visible = false;
    this.page2Visible = false;
  }

}
