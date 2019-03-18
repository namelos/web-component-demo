import { Component } from '@angular/core'

@Component({
  selector: 'ng-web-component',
  template: `
    <div>
      <h1>{{text}}</h1>
    </div>
  `
})
export class NgWebComponentComponent {
  text = 'Ng Web Component'

  constructor() {}
}
