import { Component, OnInit } from '@angular/core';
import dataSharer from 'src/app/util/data-sharer';
import eventService from 'src/app/util/event-service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {

  text = '';

  ngOnInit() {
    this.text = dataSharer.textPage1;
  }

  onText() {
    dataSharer.textPage1 = this.text;
    eventService.execCallback(dataSharer.events.onTextPage1);
  }

  navTo(page: string) {
    dataSharer.navTo(page);
  }

}
