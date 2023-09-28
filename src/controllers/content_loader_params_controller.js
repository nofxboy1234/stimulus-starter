import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  load({ params }) {
    console.log('load');
    fetch(params.url)
      .then((response) => response.text())
      .then((html) => (this.element.innerHTML = html));
  }
}
