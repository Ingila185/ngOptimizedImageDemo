import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PebblesComponent } from './pebbles/pebbles.component';
import { RainComponent } from './rain/rain.component';
import { StreetComponent } from './street/street.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PebblesComponent, RainComponent, StreetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-optimized-image-demo';
}
