import * as React from 'react'
import { render } from 'react-dom'

export function MyWebComponent() {
  return <h2>
    React Web Component
  </h2>
}

class ReactWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
    render(<MyWebComponent/>, mountPoint)
  }
}

customElements.define('react-web-component', ReactWebComponent);
