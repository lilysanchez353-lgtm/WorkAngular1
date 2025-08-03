import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products';
import { FormsModule } from '@angular/forms';
import { ApiService } from './texto/texto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Lily Make up');
  productData: any;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.productList().subscribe((data: any) => {
      console.log(data);
      this.productData = data.products;
    });
  }
}
