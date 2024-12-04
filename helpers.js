export const debugError = (error) => {
  console.log("Lỗi:", { error });

  switch (error.code) {
    case "auth/invalid-email":
      return "Email không hợp lệ";
    case "auth/invalid-credential":
      return "Email hoặc mật khẩu không hợp lệ";
    case "auth/email-already-in-use":
      return "Email đã được sử dụng";
    case "auth/weak-password":
      return "Mật khẩu yếu";

    default:
      return "Lỗi không xác định, liên hệ hỗ trợ để xử lý";
  }
};
