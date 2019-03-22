import * as React from 'react'
import { render } from 'react-dom'

function ReactContainerApp() {
  return <div style={{ border: '1px solid black' }}>
    <h1>React Container Component</h1>
    <web-component></web-component>
    <ng-web-component></ng-web-component>
    <vue-web-component></vue-web-component>
    <react-web-component></react-web-component>
  </div>
}

const el = document.querySelector('#react-app')
render(<ReactContainerApp/>, el)
