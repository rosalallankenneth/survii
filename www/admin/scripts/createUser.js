$(document).ready(function() {
  $("#createForm").submit(function(e) {
    e.preventDefault();
    $("#btnLogin").attr("disabled", true);

    const username = $("#username").val();
    const lastname = $("#lastname").val();
    const firstname = $("#firstname").val();
    const userType = $("#userType").val();

    if (username === "" || lastname === "" || firstname === "" || userType) {
      $("#btnLogin").attr("disabled", false);
    }
    if (username === "") {
      AlertMessage("Please enter a username.", "warning");
      return;
    }
    if (lastname === "") {
      AlertMessage("Please enter a lastname.", "warning");
      return;
    }
    if (firstname === "") {
      AlertMessage("Please enter a firstname.", "warning");
      return;
    }
    if (userType === "") {
      AlertMessage("Please select a user type.", "warning");
      return;
    }

    submitCreateUser({ username, lastname, firstname, userType });
  });
});
