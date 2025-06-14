import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls :['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0 };
  editProductId: number | null = null;
  editedProduct: Product = { name: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    if (!this.newProduct.name || this.newProduct.price <= 0) return;

    this.productService.create(this.newProduct).subscribe({
      next: (product) => {
        this.products.push(product);
        this.newProduct = { name: '', price: 0 };
      },
      error: (err) => console.error('Erreur lors de la création du produit', err)
    });
  }

  startEdit(product: Product): void {
    this.editProductId = product.id || null;
    this.editedProduct = { ...product };
  }

  cancelEdit(): void {
    this.editProductId = null;
    this.editedProduct = { name: '', price: 0 };
  }

  saveEdit(): void {
    if (this.editProductId === null) return;
    if (!this.editedProduct.name || this.editedProduct.price <= 0) return;

    this.productService.update(this.editProductId, this.editedProduct).subscribe({
      next: (updatedProduct) => {
        const index = this.products.findIndex(p => p.id === this.editProductId);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
        this.cancelEdit();
      },
      error: (err) => console.error('Erreur lors de la modification du produit', err)
    });
  }

  deleteProduct(id: number | undefined): void {
    if (!id) return;
    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
      },
      error: (err) => console.error('Erreur lors de la suppression du produit', err)
    });
  }
}
