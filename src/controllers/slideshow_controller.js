import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['slide'];
  static values = {
    index: { type: Number, default: 2 },
    effect: { type: String, default: 'kenburns' },
  }; // this.indexValue -> data-slideshow-index-value

  next() {
    this.indexValue++;
  }
  
  previous() {
    this.indexValue--;
  }
  
  indexValueChanged() {
    const lastSlideIndex = this.slideTargets.length - 1
    if (this.indexValue < 0) {
      this.indexValue = lastSlideIndex
    }
    if (this.indexValue > lastSlideIndex) {
      this.indexValue = 0
    }
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }
}
