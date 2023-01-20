import { LitElement, css, html } from 'lit';
import '../components/data-form';

export default class FormPage extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <data-form></data-form>
    `;
  }
}

window.customElements.define('form-page', FormPage);
