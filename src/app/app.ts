import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisneyWorld } from "./ui/disney-world/disney-world";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisneyWorld],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wait-times');
}
