package com.dao;

import cn.hutool.crypto.digest.DigestUtil;
import com.DButil.DButil;
import com.pojo.UserPojo;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {

    public UserPojo login(String username, String password) {

        String sql = "select username , password from users where username=? and password = ? ";

        String psw = DigestUtil.md5Hex(password);

        ResultSet rs = DButil.query(sql, username, psw);

        try {
            if (rs.next()) {
                username = rs.getString(1);
                password = rs.getString(2);
                UserPojo pojo = new UserPojo();
                pojo.setUsername(username);
                pojo.setPassword(password);
                System.out.println("用户名是："+username+password);
                return pojo;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

}
