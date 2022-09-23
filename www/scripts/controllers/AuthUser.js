URL_USER_LOGIN = "https://survii.000webhostapp.com/api/userLogin-v2.php";

const AuthUser = payload => {
  HttpRequest(URL_USER_LOGIN, "POST", payload, verifyLogin);
};

const verifyLogin = res => {
  if (res.success) {
    AlertMessage(res.message + " Redirecting to dashboard...", "success");

    Cookies.set("userType", res.data.userType);
    Cookies.set("lastname", res.data.lastname);
    Cookies.set("firstname", res.data.firstname);

    const userType = res.data.userType;
    if (userType === "RESPONDENT") {
      Cookies.set("respondentId", res.data.username);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } else if (userType === "CREATOR") {
      Cookies.set("creatorId", res.data.username);
      setTimeout(() => {
        window.location = "creator/index.html";
      });
    } else if (userType === "ADMIN") {
      Cookies.set("adminId", res.data.username);
      setTimeout(() => {
        window.location = "admin/index.html";
      });
    } else {
      window.location = "login.html";
    }
  } else {
    AlertMessage(res.message, "warning");
    $("#btnLogin").attr("disabled", false);
    console.log(res);
  }
};

if (
  !(
    Cookies.get("username") === undefined &&
    Cookies.get("pw") === undefined &&
    Cookies.get("userType") === undefined
  )
) {
  const userType = Cookies.get("userType");
  if (userType === "RESPONDENT") {
    window.location = "index.html";
  } else if (userType === "CREATOR") {
    window.location = "creator/index.html";
  } else if (userType === "ADMIN") {
    window.location = "admin/index.html";
  } else {
    window.location = "survey.html";
  }
}
