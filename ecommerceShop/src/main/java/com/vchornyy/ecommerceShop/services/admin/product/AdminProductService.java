package com.vchornyy.ecommerceShop.services.admin.product;

import com.vchornyy.ecommerceShop.dto.ProductDto;

import java.io.IOException;
import java.util.List;

public interface AdminProductService {
    ProductDto addProduct(ProductDto productDto) throws IOException;

    List<ProductDto> getAllProducts();

    List<ProductDto> getAllProductsByName(String name);


    boolean deleteProduct(Long id);
}
