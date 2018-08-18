import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dropdownFix]'
})
export class DropdownFix {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener ('click') onClick() {

    if (this.elRef.nativeElement.classList.contains('open')) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open')
    }
    else {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    }
  }
}
