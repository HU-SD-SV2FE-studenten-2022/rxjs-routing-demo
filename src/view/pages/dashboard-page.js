import { LitElement, css, html } from 'lit';
import '../components/data-sum';
import '../components/data-list';

export default class DashboardPage extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <data-sum></data-sum>
      <data-list></data-list>
      <a href="./form">Add data</a>
    `;
  }
}

window.customElements.define('dashboard-page', DashboardPage);
