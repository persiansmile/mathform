import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHightlight]',
})
export class AnswerHightlightDirective implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    console.log(this.controlName.control?.parent);
    this.controlName
      .control!.parent!.valueChanges.pipe(
        map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b)))
      )
      .subscribe((value) => {
        // console.log(value);

        if(value<0.2){
          this.el.nativeElement.classList.add('close');
        }else{
          this.el.nativeElement.classList.remove('close');
        }
      });
  }
}
