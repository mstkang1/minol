package com.knpharm.minol.service.store;

import com.knpharm.minol.dto.StoreDto;

import java.util.List;

public interface StoreService {
    List<StoreDto> selectStoreList(StoreDto storeDto) throws Exception;
}
