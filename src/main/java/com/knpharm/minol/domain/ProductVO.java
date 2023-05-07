package com.knpharm.minol.domain;

import lombok.Data;

@Data
public class ProductVO {
    private String productName;
    private String brandCode;
    private int productOrder;
    private String ProductOrgFileName;

    private String ProductSaveFileName;

}
