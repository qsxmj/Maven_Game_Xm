package com.dao;

import com.DButil.DButil;
import com.pojo.StudentPojo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO {


    public List<StudentPojo> findAllStudent() {

        String sql = "select * from student";

        ResultSet rs = DButil.query(sql);

        List<StudentPojo> list = new ArrayList<StudentPojo>();
        StudentPojo studentPojo = null;
        try {
            while (rs.next()){
                    StudentPojo pojo = new StudentPojo();
                    pojo.setSid(rs.getInt(1));
                    pojo.setSname(rs.getString(2));
                    list.add(pojo);
                System.out.println("查到了所有学生");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
