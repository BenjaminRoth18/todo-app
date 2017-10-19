import {
  Directive,
  Renderer2,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appToggleAdd]'
})
export class ToggleAddDirective implements OnInit {
  sidebar: boolean;
  @Input() toggleName: string;
  @Input() close: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('click') click() {
    this.sidebar = !this.sidebar;
    this.renderer.addClass(document.body, 'active-' + this.toggleName);
  }
}
