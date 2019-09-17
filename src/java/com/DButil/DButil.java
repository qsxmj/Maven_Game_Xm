package com.DButil;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;
import java.util.Vector;

public class DButil {

    public static Vector<Connection> connectionPool = new Vector<Connection>();

    static {
        InputStream is = DButil.class.getResourceAsStream("/DB.properties");
        Properties properties = new Properties();
        Connection conn = null;

        try {
            properties.load(is);

            String username = properties.getProperty("username");
            String password = properties.getProperty("password");
            String url = properties.getProperty("url");
            String driver = properties.getProperty("driver");

            Class.forName(driver);
            for (int i = 0; i < 10; i++) {
                conn = DriverManager.getConnection(url, username, password);
                connectionPool.add(conn);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //------------------得到链接
    public static Connection getcConnection() {
        Connection conn = connectionPool.get(0);
        connectionPool.remove(0);
        return conn;
    }

    //------------------释放链接
    public static void releaseConnction(Connection conn) {
        connectionPool.add(conn);
    }

    public static ResultSet query(String sql, Object... p) {
        Connection conn = getcConnection();
        ResultSet rs = null;

        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            if (p != null) {
                for (int i = 0; i < p.length; i++) {
                    ps.setObject(i + 1, p[i]);
                }
            }
            rs = ps.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        releaseConnction(conn);
        return rs;
    }

    public static int zsg(String sql, Object... p) {

        Connection conn = getcConnection();
        int n = 0;
        try {
            PreparedStatement ps = conn.prepareStatement(sql);

            if (p != null) {
                for (int i = 0; i < p.length; i++) {
                    ps.setObject(i + 1, p[i]);
                }
            }
            n = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            releaseConnction(conn);
        }
        return n;
    }


}
