package com.knpharm.minol.service.banner.impl;

import com.knpharm.minol.dto.BannerDto;
import com.knpharm.minol.mapper.BannerMapper;
import com.knpharm.minol.service.banner.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BannerServiceImpl implements BannerService {
    @Autowired
    private BannerMapper bannerMapper;

    @Override
    public List<BannerDto> selectBannerList(String  brandCode) throws Exception {
        return bannerMapper.selectBannerList(brandCode);
    }

    @Override
    public BannerDto selectBanner(int  bannerSeq) throws Exception {
        return bannerMapper.selectBanner(bannerSeq);
    }
}
