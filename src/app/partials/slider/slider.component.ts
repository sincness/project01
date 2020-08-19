import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() collection: Array<Object>;
  current: number = 0;
  width: number = window.innerWidth;

  constructor() { }

  ngOnInit(): void { }

  next() {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slider figure');
    this.current = (this.current + 1) % this.collection.length;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }

  previous() {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slider figure');
    this.current = (this.current >= 1) ? (this.current - 1) % - this.collection.length : this.collection.length - 1;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
  }

}
