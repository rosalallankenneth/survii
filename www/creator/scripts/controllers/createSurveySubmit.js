const URL_CREATE_SURVEY =
  "https://survii.000webhostapp.com/api/creators/v2/createSurvey.php";

const submitNewSurvey = () => {
  $("#btn-createSurvey").attr("disabled", true);

  let payload = {
    surveyId: ID(),
    title: $("#surveyTitle").val(),
    description: $("#surveyDesc").val(),
    creator: userData.username,
    items: [],
    choices: []
  };

  const itemDescs = $(".itemDesc");

  itemDescs.each(function() {
    const item = {
      itemId: `${payload.surveyId}-${ID()}`,
      description: $(this).val()
    };
    payload.items = [...payload.items, item];

    const choicesPerItem = $(this)
      .parent()
      .parent()
      .siblings(".choices")
      .children(".con-choice")
      .children(".choice");

    choicesPerItem.each(function() {
      const choice = {
        choiceId: `${item.itemId}-${ID()}`,
        itemId: item.itemId,
        description: $(this).val()
      };

      payload.choices = [...payload.choices, choice];
    });
  });

  // POST request to send new survey data to create
  HttpRequest(
    URL_CREATE_SURVEY,
    "POST",
    { payload: JSON.stringify(payload) },
    verifySubmission,
    afterSubmit
  );
};

const afterSubmit = () => {
  $("#btn-createSurvey").attr("disabled", false);
};

const verifySubmission = res => {
  if (res.success) {
    AlertMessage(res.message + " Redirecting to dashboard...", "success");
    setTimeout(() => {
      window.location = "index.html";
    }, 3000);
  } else {
    AlertMessage(res.message, "danger");
  }
};
