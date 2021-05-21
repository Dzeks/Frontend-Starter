import { Pipe, PipeTransform } from '@angular/core';
import {ProductDto} from "../domain/api.types";

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(items: ProductDto[] | null, pageSize: number): ProductDto[] | null {
    if (!items) {
      return items;
    }
    return items.slice(0, pageSize);
  }
}
