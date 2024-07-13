import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ProductCreate } from 'src/app/contracts/productCreate';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  create(product : ProductCreate, succesCallBack? : any, errorCallBack? : any ){
    this.httpClientService.post({
      controller : "products"
    },product)
    .subscribe(result => {
      succesCallBack();
    },(errorResponse : HttpErrorResponse)=>{
      const _error : Array<{key : string, value : Array<string >}> = errorResponse.error;
      let message = "";
      _error.forEach((v , index) =>{
          v.value.forEach((_v, _index)=>{
            message += `${_v} <br>`
          });
      });
      errorCallBack(message);
    })
  }
}
