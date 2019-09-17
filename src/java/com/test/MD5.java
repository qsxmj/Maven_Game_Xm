package com.test;

import cn.hutool.crypto.digest.DigestUtil;

public class MD5 {
    public static void main(String[] args) {

        String pwd = "123352";
        String str = DigestUtil.md5Hex(pwd);
        System.out.println(str);

    }
}
