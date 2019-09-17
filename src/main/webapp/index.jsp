<%--
  Created by IntelliJ IDEA.
  User: qsxmji
  Date: 2019/9/17
  Time: 15:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Demo</title>
    <link rel="stylesheet" type="text/css" href="css/xcConfirm.css"/>
    <script src="js/jquery-1.9.1.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/xcConfirm.js" type="text/javascript" charset="utf-8"></script>
    <style type="text/css">
        .sgBtn {
            width: 135px;
            height: 35px;
            line-height: 35px;
            margin-left: 10px;
            margin-top: 10px;
            text-align: center;
            background-color: #0095D9;
            color: #FFFFFF;
            float: left;
            border-radius: 5px;
        }
    </style>

</head>

<body>
<div class="" style="height: 768px;">

    <div class="sgBtn" id="btn7" style="display: none;">弹窗7(自定义)</div>

</div>
</body>
<script type="text/javascript">
    $(function () {
        $("#btn7").click(function () {
            var txt = "想明白生命的意义吗？想真正的……活着吗？";
            var option = {
                title: "主神",
                btn: parseInt("0011", 2),
                onOk: function () {
                    console.log("yes");
                }
            }
            window.wxc.xcConfirm(txt, "custom", option);
        });
    });

    window.onload = function () {
        document.getElementById("btn7").click();
    }
</script>

</html>
