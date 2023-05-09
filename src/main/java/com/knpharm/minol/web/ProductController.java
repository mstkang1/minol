package com.knpharm.minol.web;

import com.knpharm.minol.dto.ProductDto;
import com.knpharm.minol.service.product.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ProductController {

    private Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;


    @ResponseBody
    @RequestMapping(value = "/productList", method = RequestMethod.POST)
    public Map<String, Object> productList(@RequestBody ProductDto productDto) throws Exception {

        Map<String, Object> rtnObj = new HashMap<>();

        List<ProductDto> productList = productService.selectProductList(productDto);
        //logger.info("productList -> " + productList.toString());

        rtnObj.put("productList", productList);
        return rtnObj;
    }
}
