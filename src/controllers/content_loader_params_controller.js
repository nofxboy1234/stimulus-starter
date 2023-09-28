import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  load(event) {
    console.log(event);
    event.preventDefault();

    console.log('load');
    fetch(event.params.url)
      .then((response) => response.text())
      .then((html) => (this.element.innerHTML = html));
  }
}
