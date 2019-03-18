import { Injector, NgModule } from '@angular/core'
import { createCustomElement } from '@angular/elements'
import { BrowserModule } from '@angular/platform-browser'
import { NgComponent } from './ng.component'
import { NgWebComponentComponent } from './ng-web-component.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    NgComponent,
  ],
  declarations: [
    NgComponent,
    NgWebComponentComponent
  ],
  entryComponents: [
    NgWebComponentComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(NgWebComponentComponent, { injector: this.injector })
    customElements.define('ng-web-component', el)
  }
}
