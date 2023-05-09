package com.knpharm.minol.dto;

import lombok.Data;

@Data
public class ProductDto {
    private String productName;
    private String brandCode;
    private int productOrder;
    private String ProductOrgFileName;

    private String ProductSaveFileName;

}
