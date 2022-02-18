import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
      description: "Leao"
    },
    {
      url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/F767/production/_103953336_de27.jpg",
      description: "Leoa"
    }
  ]
}
