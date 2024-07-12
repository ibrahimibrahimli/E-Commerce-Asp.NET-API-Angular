import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinnerService : NgxSpinnerService){}
  showSpinner(spinnerNameType : SpinnerType){
      this.spinnerService.show(spinnerNameType);

      setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }
  hideSpinner(spinnerNameType : SpinnerType){
    this.spinnerService.hide(spinnerNameType);
  }
}

export enum SpinnerType{
  BallAtom = "ball-atom",
  BallScaleMultiple = "ball-scale-multiple",
  BallSpinClockwiseFadeRotating = "ball-spin-clockwise-fade-rotating"
}
