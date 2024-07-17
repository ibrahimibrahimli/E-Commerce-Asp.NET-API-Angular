import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element : ElementRef, private _renderer : Renderer2, private httpClientService : HttpClientService) {
    const img = _renderer.createElement("img")
    img.setAttribute({
      "src" : "../../../../../assets/images/delete.png",
      "alt" : "Delete button",
      "width" : "25px",
      "style" : "cursor : pointer; width : 25px;"
    })

    _renderer.appendChild(element.nativeElement, img)
   }

}
