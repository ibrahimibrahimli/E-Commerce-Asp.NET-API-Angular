import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-CommerceClient';
  constructor(private toastrService : CustomToastrService) {
    toastrService.message("Ugursuz","Diqqet",{
      messageType : ToastrMessageType.Error,
      position : ToastrPosition.TopLeft
    })
    toastrService.message("Ugursuz","Diqqet",{
      messageType : ToastrMessageType.Success,
      position : ToastrPosition.TopRight
    })
    toastrService.message("Ugursuz","Diqqet",{
      messageType : ToastrMessageType.Warning,
      position : ToastrPosition.BottomLeft
    })
    toastrService.message("Ugursuz","Diqqet",{
      messageType : ToastrMessageType.Info,
      position : ToastrPosition.BottomRight
    })
  }
}
