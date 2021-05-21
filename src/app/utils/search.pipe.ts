import { Pipe, PipeTransform } from '@angular/core';
import { ProductDto } from '../domain/api.types';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: ProductDto[] | null, search: string): ProductDto[] | null {
    if (!items) {
      return items;
    }
    if (!search || search.length < 3) {
      return items;
    }
    search = search.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
    );
  }
}
