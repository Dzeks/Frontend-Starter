import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductDto, ProductFilterDto, UserDto } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getProducts(params: ProductFilterDto): Promise<ProductDto[]> {
    return this.http
      .get<ProductDto[]>("http://localhost:8080/products", { params })
      .toPromise();
  }
  deleteProduct(productId: number): Promise<ProductDto[]> {
    return this.http
      .delete<ProductDto[]>(`http://localhost:8080/products/${productId}`)
      .toPromise();
  }
  deleteProducts(productIds: number[]): Promise<any> {
    if (productIds.length > 100) {
      return Promise.reject("Too many items to delete");
    }
    return Promise.all(productIds.map((id) => this.deleteProduct(id)));
  }
  getRecommendeds(_limit: number): Promise<ProductDto[]> {
    return this.http
      .get<ProductDto[]>("http://localhost:8080/recommendeds", {
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
