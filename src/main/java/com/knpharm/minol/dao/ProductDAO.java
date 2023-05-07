package com.knpharm.minol.dao;

import com.knpharm.minol.domain.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductDAO {
    public List<ProductVO> listProduct(ProductVO productVO);
}
