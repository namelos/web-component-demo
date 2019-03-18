import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>{{text}}</h1>
    </div>
  `
})
export class MainComponent {
  text = 'ng'

  constructor() {}
}
