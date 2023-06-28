
import { ElementRef } from '@angular/core';
import { AnswerHightlightDirective } from './answer-hightlight.directive';
import { NgControl } from '@angular/forms';


describe('AnswerHightlightDirective', () => {
  let _el :ElementRef
  let _control :NgControl
  it('should create an instance', () => {
    const directive = new AnswerHightlightDirective(_el,_control);
    expect(directive).toBeTruthy();
  });
});
