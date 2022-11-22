import { Component, OnInit } from '@angular/core';
import dataSharer from 'src/app/util/data-sharer';
import eventService from 'src/app/util/event-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  textPage1 = '';
  textPage2 = '';

  ngOnInit() {
    eventService.registerCallback(dataSharer.events.onTextPage1, () => this.textPage1 = dataSharer.textPage1);
    eventService.registerCallback(dataSharer.events.onTextPage2, () => this.textPage2 = dataSharer.textPage2);
  }

}
