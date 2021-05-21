import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto, ProductFilterDto, UserDto } from './api.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getProducts(params: ProductFilterDto): Promise<ProductDto[]> {
    return this.http
      .get<ProductDto[]>('http://localhost:8080/products', { params })
      .toPromise();
  }
  getRecommendeds(_limit: number): Promise<ProductDto[]> {
    return this.http
      .get<ProductDto[]>('http://localhost:8080/recommendeds', {
        params: { _limit },
      })
      .toPromise();
  }
  getUser(userId: number) {
    return this.http
      .get<UserDto>(`http://localhost:8080/users/${userId}`)
      .toPromise();
  }
}
