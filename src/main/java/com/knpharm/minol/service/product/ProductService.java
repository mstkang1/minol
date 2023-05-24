package com.knpharm.minol.service.product;

import com.knpharm.minol.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> selectProductList(String brandCode) throws Exception;

    ProductDto selectProduct(String productName) throws Exception;

}
