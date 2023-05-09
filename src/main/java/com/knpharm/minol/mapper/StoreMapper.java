package com.knpharm.minol.mapper;

import com.knpharm.minol.dto.StoreDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreMapper {
    List<StoreDto> selectStoreList(StoreDto storeDto) throws Exception;
}
