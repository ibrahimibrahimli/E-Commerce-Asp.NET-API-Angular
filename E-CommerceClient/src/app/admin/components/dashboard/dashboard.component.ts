import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private alertify : AlertifyService) {
  }


  ngOnInit() : void {
    
  }
  Message(){
    this.alertify.message("Ugurlu", {
      position : Position.BottomCenter,
      delay : 15,
      messageType : MessageType.Warning
    })
  }
  Dismiss(){
    this.alertify.dismiss()
  }
}

