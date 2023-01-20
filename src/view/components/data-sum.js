import { LitElement, css, html } from 'lit';
import { dataSeviceInstance } from '../../service/';

export default class DataSum extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      datalist: { type: Array }
    };
  }

  constructor() {
    super();
    this.datalist = [];
    this.dataService = dataSeviceInstance;
  }

  connectedCallback() {
    super.connectedCallback();

    this.observer = {
      next: (dataArr) => 
        this.datalist = dataArr,
    }

    this.subscription = this.dataService.dataArray.subscribe(this.observer);
  }

  disconnectedCallback() {
    this.subscription.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <h1>Data Sum</h1>
      <p>Sum: ${this.datalist.reduce((sum, data) => sum + data, 0)}</p>
    `;
  }
}

window.customElements.define('data-sum', DataSum);
