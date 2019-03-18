export class WebComponent extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const wrapper = document.createElement('h2')
    wrapper.textContent = 'Web Component'

    shadow.appendChild(wrapper)
  }
}

customElements.define('web-component', WebComponent)
