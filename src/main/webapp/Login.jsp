<%--
  Created by IntelliJ IDEA.
  User: qsxmji
  Date: 2019/9/17
  Time: 11:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登陆</title>
    <style>
        form{
            width: 300px;
            height: 300px;
            background: #cccccc;
            float: left;
        }
    </style>
</head>
<body>
<form method="post" action="user" >
    用户名: <input type="text" name="username"><br>
    密码：<input type="text" name="password"><br>
    验证码：<input type="text" name="yzm"> <img src="hello"><br>
    <input type="submit" value="登陆">
</form>
<img src="img/qrcode.jpg">

</body>
</html>
