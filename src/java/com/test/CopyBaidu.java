package com.test;

import cn.hutool.http.HttpUtil;

public class CopyBaidu {

    public static void main(String[] args) {
        String result1= HttpUtil.get("https://www.baidu.com");
        System.out.println(result1);
    }
}
