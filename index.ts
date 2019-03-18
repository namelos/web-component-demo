import 'core-js/es6/reflect'
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './ng/app.module'
import Vue from 'vue'
// @ts-ignore
import App from './vue/App'

platformBrowserDynamic().bootstrapModule(AppModule)

new Vue({
  el: '#app',
  render: h => h(App)
})
