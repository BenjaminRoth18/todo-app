import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appListHighlight]'
})
export class ListHighlightDirective implements OnInit {
  private backgroundColor = 'green';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  constructor() { }

  ngOnInit() {

  }

}
