import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ProductCreate } from 'src/app/contracts/productCreate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  create(product : ProductCreate, succesCallBack? : any){
    this.httpClientService.post({
      controller : "products"
    },product)
    .subscribe(result => {
      succesCallBack();
    })
  }
}
