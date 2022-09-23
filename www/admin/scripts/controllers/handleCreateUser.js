const URL_CREATE_USER =
  "https://survii.000webhostapp.com/api/admin/createUser.php";

const submitCreateUser = payload => {
  HttpRequest(URL_CREATE_USER, "POST", payload, handleSubmit, false);
};

const handleSubmit = res => {
  if (res.success) {
    AlertMessage(res.message, "success");

    $("#username").val("");
    $("#lastname").val("");
    $("#firstname").val("");
    $("#userType").val("");
  } else {
    AlertMessage(res.message, "warning");
    $("#btnCreate").attr("disabled", false);
  }
};
