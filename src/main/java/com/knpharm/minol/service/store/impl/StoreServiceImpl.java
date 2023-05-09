package com.knpharm.minol.service.store.impl;

import com.knpharm.minol.dto.StoreDto;
import com.knpharm.minol.mapper.StoreMapper;
import com.knpharm.minol.service.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreMapper storeMapper;

    @Override
    public List<StoreDto> selectStoreList(StoreDto storeDto) throws Exception {
        return storeMapper.selectStoreList(storeDto);
    }
}
