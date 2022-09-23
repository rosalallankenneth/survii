const URL_SEND_RESPONSE =
  "https://survii.000webhostapp.com/api/respondents/v2/sendResponse.php";

const handleResponseSubmit = () => {
  $("#btn-submitResponse").attr("disabled", true);

  let responseData = {
    responseId: ID() + "-" + ID(),
    surveyId: surveyData.surveyInfo.surveyId,
    respondentId: userData.username,
    responseItems: []
  };

  let noResponse = true;

  $(".item").each(function() {
    const itemId = $(this).attr("id");
    const choices = $(this)
      .children(".choicesContainer")
      .children(".choice")
      .children("input");

    choices.each(function() {
      if ($(this).is(":checked")) {
        const oneResponseItem = {
          responseItemId: responseData.responseId + "-" + ID(),
          itemId,
          choiceId: $(this).attr("id")
        };
        responseData.responseItems = [
          ...responseData.responseItems,
          oneResponseItem
        ];
        noResponse = false;
      }
    });

    if (noResponse) {
      AlertMessage(
        "There are still items that need to have a response.",
        "warning"
      );
      $("#btn-submitResponse").attr("disabled", false);
      return false;
    }
  });

  if (!noResponse) {
    HttpRequest(
      URL_SEND_RESPONSE,
      "POST",
      { payload: JSON.stringify(responseData) },
      verifySubmission,
      false
    );
  }
};

const verifySubmission = res => {
  if (res.success) {
    window.location = "survey.html";
  } else {
    AlertMessage(res.message, "danger");
    $("#btn-submitResponse").attr("disabled", false);
  }
};
