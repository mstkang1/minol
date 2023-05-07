package com.knpharm.minol.dao;

import com.knpharm.minol.domain.StoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreDAO {
    public List<StoreVO> listStore(StoreVO storeVO);
}
