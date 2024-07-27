import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpansionExpandCollapseAllExample } from './example/expansion-expand-collapse-all-example';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpansionExpandCollapseAllExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppComponent {
  title = 'kabc';
}
