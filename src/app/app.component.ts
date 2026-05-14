// src/app/app.component.ts
// Root Component of the application
// This component manages navigation between different views

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Track the current active component to display
  currentComponent = 'country'; // 'country' or 'registration'

  /**
   * Switch between components
   * @param component - Component name to display
   */
  switchComponent(component: string): void {
    this.currentComponent = component;
  }
}
