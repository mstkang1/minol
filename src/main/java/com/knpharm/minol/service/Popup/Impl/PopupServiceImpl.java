package com.knpharm.minol.service.Popup.Impl;

import com.knpharm.minol.dto.PopupDto;
import com.knpharm.minol.mapper.PopupMapper;
import com.knpharm.minol.service.Popup.PopupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PopupServiceImpl implements PopupService {

    @Autowired
    private PopupMapper popupMapper;

    @Override
    public PopupDto selectPopupBrand(String brandCode) throws Exception {
        return popupMapper.selectPopupBrand(brandCode);
    }

    @Override
    public PopupDto selectPopup(int popupSeq) throws Exception {
        return popupMapper.selectPopup(popupSeq);
    }

    @Override
    public int insertPopup(PopupDto popupDto) throws Exception {
        return popupMapper.insertPopup(popupDto);
    }

    @Override
    public int updatePopup(PopupDto popupDto) throws Exception {
        return popupMapper.updatePopup(popupDto);
    }
    
}
