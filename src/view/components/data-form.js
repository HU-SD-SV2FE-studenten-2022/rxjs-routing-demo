import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';
import { dataSeviceInstance } from '../../service/';

export default class DataForm extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      data: { type: Number },
    };
  }

  get dataField() {
    // ?. optional chaining (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    // ?? = nullish coalescing operator (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
    return this.renderRoot?.querySelector('#datainput') ?? null;
  }

  constructor() {
    super();
    this.dataService = dataSeviceInstance;
  }

  submitHandler(event) {
    event.preventDefault();
    this.data = Number(this.dataField.value);
    this.dataField.value = 0;
    this.dataService.addData(this.data);
    
    const BASE = import.meta.env.BASE_URL ?? '/';
    Router.go(BASE);
  }

  render() {
    return html`
      <h1>Data Form</h1>
      <form @submit=${this.submitHandler}>
        <label for="datainput">Data:</label>
        <input id="datainput" name="datafield" type="number">
        <button type="submit">Add</button>
      </form>
      <hr/>
      <p>Data: ${this.data}</p>
    `;
  }
}

window.customElements.define('data-form', DataForm);
