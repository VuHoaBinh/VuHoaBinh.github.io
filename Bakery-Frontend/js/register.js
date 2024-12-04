function checkUsername() {
    let username = $("#txtUsername").val();
    let patUsername = /^[A-Za-z0-9._]{4,20}$/;

    if (username.length < 4) {
        $("#errorUsername").html("Tên đăng nhập phải lớn hơn 4 ký tự");
        return false;
    } else {
        if (patUsername.test(username)) {
            $("#errorUsername").html("*");
            return true;
        } else {
            $("#errorUsername").html("Tên đăng nhập không hợp lệ");
            return false;
        }
    }
}


function checkPassword() {
    let pass1 = $("#txtPassword1").val();
    let patPass = /^[A-Za-z0-9_-]{6,20}$/

    if (pass1 == "") {
        $("#errorPassword1").html("Mật khẩu không được để trống");
        return false;
    } else {
        if (patPass.test(pass1)) {
            $("#errorPassword1").html("*");
            return true;
        } else {
            $("#errorPassword1").html("Mật khẩu phải từ 6 đến 20 ký tự");
            return false;
        }
    }
}


function recheckPassword() {
    let pass1 = $("#txtPassword1").val();
    let pass2 = $("#txtPassword2").val();

    if (pass1 == pass2) {
        $("#errorPassword2").html("*");
        return true;
    } else {
        $("#errorPassword2").html("Mật khẩu không khớp");
        return false;
    }
}


function checkFullName() {
    let fullname = $("#txtFullName").val();
    let patternFullName = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/;
    
    if (fullname == "") {
        $("#errorFullName").html("Họ tên không được để trống");
        return false;
    } else {
        if (patternFullName.test(fullname)) {
            $("#errorFullName").html("Họ tên hợp lệ");
            return true;
        } else {
            $("#errorFullName").html("Họ tên không hợp lệ. Mời nhập lại !");
            return false;
        }
    }
}


function checkEmail() {
    let email = $("#txtEmail").val();
    let patEmail = /^[A-Za-z0-9._]+@+[A-Za-z]{3,}\.[A-Za-z]{3,}$/;

    if (email == "") {
        $("#errorEmail").html("Email không được để trống");
        return false;
    } else {
        if (patEmail.test(email)) {
            $("#errorEmail").html("*");
            return true;
        } else {
            $("#errorEmail").html("Email không hợp lệ");
            return false;
        }
    }
}


function checkPhone() {
    let phone = $("#txtPhone").val();
    let patternPhone = /^[0-9]{10,11}$/;

    if (phone == "") {
        $("#errorPhone").html("Số điện thoại không được để trống");
        return false;
    } else {
        if (patternPhone.test(phone)) {
            $("#errorPhone").html("*");
            return true;
        } else {
            $("#errorPhone").html("Số điện thoại không hợp lệ");
            return false;
        }
    }
}

function checkAddress() {
    let address = $("#txtAddress").val();
    let patternAddress = /^[A-Za-z0-9/ ]+$/;

    if (patternAddress.test(address)) {
        $("#errorAddress").html("*");
        return true;
    } else {
        $("#errorAddress").html("Địa chỉ không hợp lệ");
        return false;
    }
}


function dangKy() {
    if (checkUsername() && checkPassword() && recheckPassword() && checkFullName() && checkEmail() && checkPhone() && checkAddress()) {
        alert("Đăng ký thành viên thành công !");
        return true;
    } else {
        alert("Vui lòng kiểm tra lại thông tin");
        return false;
    }
}


$(document).ready(function () {
    $("#txtUsername").blur(function (e) {
        checkUsername();
    });

    $("#txtPassword1").blur(function (e) {
        checkPassword();
    });

    $("#txtPassword2").blur(function (e) {
        recheckPassword();
    });

    $("#txtFullName").blur(function (e) {
        checkFullName();
    });

    $("#txtEmail").blur(function (e) {
        checkEmail();
    });

    $("#txtPhone").blur(function (e) {
        checkPhone();
    });

    $("#txtAddress").blur(function (e) {
        checkAddress();
    });

    $("#btnRegister").click(function (e) {
        dangKy();
    });
});