$(document).ready(function() {
  $("#loginForm").submit(function(e) {
    e.preventDefault();
    $("#btnLogin").attr("disabled", true);

    const username = $("#username").val();
    const password = $("#password").val();

    if (username === "" || password === "") {
      $("#btnLogin").attr("disabled", false);
    }
    if (username === "") {
      AlertMessage("Please enter your username.", "warning");
      return;
    }
    if (password === "") {
      AlertMessage("Please enter your password.", "warning");
      return;
    }

    AuthUser({ username, password });
  });
});
