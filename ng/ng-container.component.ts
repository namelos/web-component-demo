import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{text}}</h1>
      <web-component></web-component>
      <ng-web-component></ng-web-component>
      <vue-web-component></vue-web-component>
      <react-web-component></react-web-component>
    </div>
  `,
  styles: [
    `
      .container {
        border: 1px solid black;
      }
    `
  ]
})
export class NgContainerComponent {
  text = 'Ng Container Component'

  constructor() {}
}
