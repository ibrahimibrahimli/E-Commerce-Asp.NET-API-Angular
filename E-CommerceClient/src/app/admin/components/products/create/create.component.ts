import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ProductCreate } from 'src/app/contracts/product/productCreate';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent {
  constructor(spinner : NgxSpinnerService,private alertify : AlertifyService,private productService : ProductService) {
    super(spinner);
  }

  @Output() createdProduct : EventEmitter <ProductCreate> = new EventEmitter()

  create(name : HTMLInputElement, stock : HTMLInputElement, price :HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const createProduct : ProductCreate = new ProductCreate();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);

    this.productService.create(createProduct, ()=>{
      this.hideSpinner(SpinnerType.BallAtom)
      this.alertify.message("Məhsul uğurla yükləndi",{
        dismissOthers : true,
        messageType : MessageType.Success,
        position : Position.TopRight
      })
      this.createdProduct.emit(createProduct) 
    }, errorMessage => {

     
      this.alertify.message(errorMessage,{
        dismissOthers : false,
        messageType : MessageType.Error,
        position : Position.TopLeft
      })
    })
  }

}
