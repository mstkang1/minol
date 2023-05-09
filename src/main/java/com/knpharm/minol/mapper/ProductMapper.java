package com.knpharm.minol.mapper;

import com.knpharm.minol.dto.ProductDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<ProductDto> selectProductList(ProductDto productDto) throws Exception;
}
