import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['slide'];
  static values = { index: Number } // this.indexValue -> data-slideshow-index-value

  initialize() {
    this.showCurrentSlide();
  }

  next() {
    this.indexValue++;
    this.showCurrentSlide();
  }

  previous() {
    this.indexValue--;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }
}
