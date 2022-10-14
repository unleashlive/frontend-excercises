import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to the unleashlive frontend coding challange
      </h1>
      <span style="display: block">Our assignment is about notifications</span>
    </div>
    <app-notifications></app-notifications>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'unleash-starter';
}
