import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import 'core-js/es6/reflect'
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './ng/app.module'
import Vue from 'vue'
// @ts-ignore
import App from './vue/App'
// @ts-ignore
import VueWebComponent from './vue/VueWebComponent'
import wrap from '@vue/web-component-wrapper'
import './webComponents'
import './react/ReactContainerComponent'
import './react/ReactWebComponent'

platformBrowserDynamic().bootstrapModule(AppModule)

new Vue({
  el: '#vue-app',
  render: h => h(App)
})

window.customElements.define('vue-web-component', wrap(Vue, VueWebComponent))
