import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ProductCreate } from 'src/app/contracts/product/productCreate';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductList } from 'src/app/contracts/product/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  create(product : ProductCreate, succesCallBack? : () => void, errorCallBack? : (errorMessage :string)=> void ){
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

  async read(succesCallBack? : () => void, errorCallBack? : (errorMessage) => void) : Promise<ProductList[]>{
    const promiseData: Promise<ProductList[]> = this.httpClientService.get<ProductList[]>({
      controller : "products"
    }).toPromise();

    promiseData.then(x => succesCallBack)
    .catch((errorResponse : HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
  }
}
