import { LitElement, css, html } from 'lit';
import { dataSeviceInstance } from '../../service/';

export default class DataList extends LitElement {
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
      next: (dataArr) => this.datalist = dataArr,
    }

    this.subscription = this.dataService.dataArray.subscribe(this.observer);
  }

  disconnectedCallback() {
    this.subscription.unsubscribe();
    super.disconnectedCallback();
  }

  removeHandler(event) {
    // the button uses a data attribute which holds the index value of the array. That's why we read `dataset.id`.
    // see MDN (https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
    const index = event.target.dataset.id;
    this.dataService.removeData(Number(index));
  }

  render() {
    return html`
      <h1>Data List</h1>
      <ul>
        ${this.datalist.map((data, index) => html`<li>${data} <button data-id="${index}" @click=${this.removeHandler}>X</button></li>`)}
      </ul>
    `;
  }
}

window.customElements.define('data-list', DataList);
