package com.test;

import cn.hutool.core.io.FileUtil;
import cn.hutool.extra.qrcode.QrCodeUtil;

public class QrCode {

    public static void main(String[] args) {

        QrCodeUtil.generate("https://baidu.com/", 300, 300, FileUtil.file("e:\\qrcode.jpg"));
//        QrCodeUtil.generate("https://baidu.com/", 300, 300, FileUtil.file("e:\\code\\_20190916\\src\\main\\webapp\\img\\qrcode1.jpg"));
    }

}
