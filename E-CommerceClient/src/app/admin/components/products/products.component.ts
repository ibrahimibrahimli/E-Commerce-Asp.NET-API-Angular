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

    this.httpClientService.post({
      controller: "products"
    }, {
      Name: "qapi",
      Stock: 4,
      Price: 10
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    }, {
      Name: "Taxta",
      Stock: 12,
      Price: 102
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    }, {
      Name: "Naqil",
      Stock: 104,
      Price: 30
    }).subscribe();
  }
}
