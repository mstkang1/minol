package com.knpharm.minol.mapper;

import com.knpharm.minol.dto.PopupDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PopupMapper {
    PopupDto selectPopupBrand(String brandCode) throws Exception;

    PopupDto selectPopup(int popupSeq) throws Exception;

    int insertPopup(PopupDto popupDto) throws Exception;

    int updatePopup(PopupDto popupDto) throws Exception;
}
