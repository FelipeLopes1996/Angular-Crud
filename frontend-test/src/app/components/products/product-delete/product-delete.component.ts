import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0,
  };
  // show: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(Number(id)).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.destroyer(Number(this.product.id)).subscribe(() => {
      this.productService.showMessage("Produto excluído criado!");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }

  //   destroyer(id: number): void {
  //     setTimeout(() => {
  //       this.show = true;
  //       this.getItems();
  //     }, 50);
  //   }
}
