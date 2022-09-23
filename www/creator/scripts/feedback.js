const URL_SEND_FEEDBACK =
  "https://survii.000webhostapp.com/api/respondents/v2/sendFeedback.php";

$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    sendFeedback();
  });
});

// get response of ajax call - POST send feedback
const getResponse = res => {
  console.log(res);
  $("#btn-submitFeedback").attr("disabled", true);
  if (!res.success) {
    AlertMessage(res.message, "danger");
    return;
  }

  AlertMessage(res.message, "success");
  $(".form-control").val("");
};

// events called after response received
const afterSubmit = () => {
  $("#btn-submitFeedback").attr("disabled", false);
};

// send feedback data to api
const sendFeedback = () => {
  const requestParams = {
    feedbackId: ID(),
    username: userData.username,
    email: $("#email").val(),
    message: $("#message").val(),
    userType: userData.userType
  };

  // POST request to send feedback
  HttpRequest(
    URL_SEND_FEEDBACK,
    "POST",
    requestParams,
    getResponse,
    afterSubmit
  );
};
