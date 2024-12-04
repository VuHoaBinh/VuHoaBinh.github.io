function checkUsername() {
    let username = $("#txtUsername").val();
    if (username == "") {
        $("#errUsername").html("Tên đăng nhập không được để trống");
        return false;
    } else {
        $("#errUsername").html("*");
        return true;
    }
}

function checkPassword() {
    let pass = $("#txtPassword").val();
    if (pass == "") {
        $("#errPassword").html("Mật khẩu không được để trống");
        return false;
    } else {
        $("#errPassword").html("*");
        return true;
    }
}

function checkLogin() {
    if (checkUsername() && checkPassword()) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function() {
    $("#txtUsername").blur(checkUsername);
    $("#txtPassword").blur(checkPassword);
    $("#btnDangNhap").click(function() {
        if (checkLogin()) {
            alert('Đăng nhập thành công');
        } else {
            alert('Đăng nhập thất bại');
        }
    });

});