package com.knpharm.minol.service.banner;

import com.knpharm.minol.dto.BannerDto;

import java.util.List;

public interface BannerService {
    List<BannerDto> selectBannerList(String brandCode) throws Exception;

    BannerDto selectBanner(int bannerSeq) throws Exception;

}
