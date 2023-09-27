import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['slide'];
  static values = { index: Number } // this.indexValue -> data-slideshow-index-value

  initialize() {
    console.log(this.indexValue)
    console.log(typeof this.indexValue)
    // this.index = Number(this.element.dataset.index);
    // this.showCurrentSlide();
  }

  next() {
    this.index++;
    this.showCurrentSlide();
  }

  previous() {
    this.index--;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      console.log(`index: ${index}`);
      element.hidden = index !== this.index;
    });
  }
}
