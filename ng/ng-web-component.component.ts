import { Component } from '@angular/core'

@Component({
  selector: 'ng-web-component-private',
  template: `
    <h2>{{text}}</h2>
  `
})
export class NgWebComponentComponent {
  text = 'Ng Web Component'

  constructor() {}
}
