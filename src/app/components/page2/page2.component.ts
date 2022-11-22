import { Component, OnInit } from '@angular/core';
import dataSharer from 'src/app/util/data-sharer';
import eventService from 'src/app/util/event-service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {

  text = '';

  ngOnInit() {
    this.text = dataSharer.textPage2;
  }

  onText() {
    dataSharer.textPage2 = this.text;
    eventService.execCallback(dataSharer.events.onTextPage2);
  }

  navTo(page: string) {
    dataSharer.navTo(page);
  }

}
