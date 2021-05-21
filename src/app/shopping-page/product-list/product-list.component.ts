import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ApiService } from '../../domain/api.service';
import { ProductDto, ProductFilterDto } from '../../domain/api.types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

const PER_PAGE_ITEMS = 9;
const MIN_SEARCH_LENGTH = 3;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Output() addItem = new EventEmitter<ProductDto>();
  searchForm = new FormGroup({
    q: new FormControl('', []),
  });
  items: ProductDto[] = [];
  itemsPerPage = PER_PAGE_ITEMS;
  filter: ProductFilterDto = { _page: 0, _limit: PER_PAGE_ITEMS, q: '' };
  showEmptySearchMessage = false;
  scrollSub?: Subscription;
  searchSub?: Subscription;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.loadRecommended();
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => this.maybeLoadMore());
    this.searchSub = this.searchForm.valueChanges
      .pipe(debounceTime(200))
      .subscribe(() => this.onSearch());
  }
  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }
  onSearch(page = 0) {
    if (!this.isSearch()) {
      return this.loadRecommended();
    }
    if (page === 0) {
      this.items = [];
    }
    this.filter._page = page;
    this.filter.q = this.searchForm.get('q')?.value || '';
    this.apiService.getProducts(this.filter).then((items) => {
      this.items = [...this.items, ...items];
      this.showEmptySearchMessage = this.items.length === 0;
    });
  }
  trackByFn(index: number, item: ProductDto) {
    return item.id;
  }
  private maybeLoadMore() {
    if (!this.isSearch()) {
      return;
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.filter._page++;
      this.onSearch(this.filter._page);
    }
  }
  private loadRecommended() {
    this.apiService
      .getRecommendeds(PER_PAGE_ITEMS)
      .then((items) => (this.items = items));
  }
  private isSearch() {
    return this.searchForm.get('q')?.value?.length > MIN_SEARCH_LENGTH;
  }
}
