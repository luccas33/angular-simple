import { Component } from '@angular/core';
import dataSharer from 'src/app/util/data-sharer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  navTo(page: string) {
    dataSharer.navTo(page);
  }

}
