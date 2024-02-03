import { ProductModel } from '../models/responses/ProductModel';
import axiosInstance from '../utilities/axiosInterceptors';
import { GettAllProductsModel } from './../models/responses/GetAllProductsModel';

class ProductService {
    getAll() {
        return  axiosInstance.get<GettAllProductsModel>("products")
    }

    getById(id:number) {
        return axiosInstance.get<ProductModel>("products/" + id)
    }
}

export default ProductService;