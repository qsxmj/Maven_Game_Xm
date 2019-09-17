package com.servlet;

import com.dao.UserDAO;
import com.pojo.UserPojo;
import com.sun.org.apache.bcel.internal.classfile.Code;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserServlet extends HttpServlet {

    UserDAO userDAO = new UserDAO();



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String yzm = request.getParameter("yzm");

        String sessionyzm = (String) request.getSession().getAttribute("code");

        if (sessionyzm.equalsIgnoreCase(yzm)==false){
            response.getWriter().println("<script>alert('验证码输入错误');</script>");
            response.getWriter().println("<script>location='login.html';</script>");
            return;
        }
                UserPojo pojo = userDAO.login(username,password);
                if (pojo!=null){
                    request.getSession().setAttribute("pojo",pojo);
                    response.getWriter().println("登陆成功");
                    return;
                }
                response.getWriter().println("<script>alert('用户名或密码错误')</script>");
                response.getWriter().println("<script>location='login.html';</script>");

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
