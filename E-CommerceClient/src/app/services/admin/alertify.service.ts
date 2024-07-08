import { Injectable } from '@angular/core';
declare var alertify : any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message : string , options :Partial<AlertifyOptions>){
    alertify.set('notifier', 'delay', options.delay)
    alertify.set('notifier', 'position', options.position)
    const msj= alertify[options.messageType](message)

    if(options.dismissOthers){
      msj.dismissOthers();
    }
  }

  dismiss(){
    alertify.dismissAll()
  }

}   

export class AlertifyOptions{
  messageType : MessageType = MessageType.Message;
  position : Position = Position.BottomRight;
  delay : number = 2;
  dismissOthers : boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Warning = "warning",
  Success = "success",
  Notify = "notify"
}

export enum Position{
  TopLeft= "top-left",
  TopCenter = "top-center",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right"
}