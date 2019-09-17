package com.test;

import com.dao.StudentDAO;
import com.pojo.StudentPojo;

import java.util.List;


class TestStudentDao {

    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();

        List<StudentPojo> pojos = dao.findAllStudent();

        for (StudentPojo studentPojo : pojos) {
            System.out.println(studentPojo.getSid() + "\t" + studentPojo.getSname());
        }

    }
}
