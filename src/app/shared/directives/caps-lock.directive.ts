import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapsLock]'
})
export class CapsLockDirective implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.elem.nativeElement.textContent = this.elem.nativeElement.textContent.toString().toUpperCase();
  }

}
