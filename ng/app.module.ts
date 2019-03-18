import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core'
import { createCustomElement } from '@angular/elements'
import { BrowserModule } from '@angular/platform-browser'
import { NgContainerComponent } from './ng-container.component'
import { NgComponent } from './ng.component'
import { NgWebComponentComponent } from './ng-web-component.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    NgContainerComponent
  ],
  declarations: [
    NgComponent,
    NgContainerComponent,
    NgWebComponentComponent
  ],
  entryComponents: [
    NgWebComponentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(NgWebComponentComponent, { injector: this.injector })
    customElements.define('ng-web-component', el)
  }
}
