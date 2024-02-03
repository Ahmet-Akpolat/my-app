import { ProductModel } from "./ProductModel";

export interface GettAllProductsModel {
    total:number;
    skip:number;
    products: ProductModel[];
    limit:number;
}