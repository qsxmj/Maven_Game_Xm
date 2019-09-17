package com.servlet;

import com.dao.StudentDAO;
import com.pojo.StudentPojo;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class StudentServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("get");
        StudentDAO studentDAO = new StudentDAO();

        List<StudentPojo> pojos = studentDAO.findAllStudent();
//
//        for (StudentPojo studentPojo : pojos) {
//            System.out.println(studentPojo.getSid() + "\t" + studentPojo.getSname());
//        }

            request.setAttribute("pojos",pojos);

            request.getRequestDispatcher("MyJsp.jsp").forward(request,response);


    }
}
