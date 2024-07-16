import { BaseCdkCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ProductList } from 'src/app/contracts/product/productList';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent {
  constructor(spinner : NgxSpinnerService,private productService : ProductService, private alertify : AlertifyService){
    super(spinner);
  }

  displayedColumns: string[] = ['Name', 'Price', 'Stock', 'CreatedDate', 'UpdatedDate'];
  dataSource : MatTableDataSource<ProductList>  = null;

  ngOnInit() : void {
     this.showSpinner(SpinnerType.BallAtom);
     this.productService.read(()=> this.hideSpinner(SpinnerType.BallAtom), errorMessage =>this.alertify.message(errorMessage,{
      dismissOthers : true,
      messageType : MessageType.Error,
      position : Position.TopLeft
     }))
  } 
}
