import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

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
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data))

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
    },"65a90785-61af-41f5-84c2-ad570f2421a2").subscribe();
  }
}
