import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfficeMapComponent } from './office-map/office-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfficeMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'office-map-app';
}
