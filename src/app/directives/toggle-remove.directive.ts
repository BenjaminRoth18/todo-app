import {
  Directive,
  Renderer2,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appToggleRemove]'
})
export class ToggleRemoveDirective implements OnInit {
  @Input() toggleName: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('click') click() {
    this.renderer.removeClass(document.body, 'active-' + this.toggleName);
  }
}
