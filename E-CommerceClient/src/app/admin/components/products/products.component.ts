import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import {}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)

    this.httpClientService.get<Product>({
      controller: "products"
    }).subscribe(data => {data[0].name})

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   Name: "qapi",
    //   Stock: 4,
    //   Price: 10
    // }).subscribe();

    // this.httpClientService.put({
    //   controller : "products"
    // },{
    //   Id : "6afcb1dc-8255-41ec-97fd-90b4116e80a3",
    //   Name : "Balta",
    //   Stock : 7,
    //   Price : 18.7
    // }).subscribe();

    this.httpClientService.delete({
      controller : "products"
    },"c4a00e82-1631-4ffc-b502-b884e3a87cc6").subscribe();
  }
}
