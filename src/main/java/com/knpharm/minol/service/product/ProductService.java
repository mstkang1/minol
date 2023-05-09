package com.knpharm.minol.service.product;

import com.knpharm.minol.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> selectProductList(ProductDto productDto) throws Exception;

}
