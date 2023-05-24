package com.knpharm.minol.dto;

import lombok.Data;


@Data
public class StoreDto {
    private int storeSeq;

    private String brandCode;

    private String productName;

    private String storeName;

    private String address;

    private String phone;

    private float latitude;

    private float longitude;

    private int distance;

}
