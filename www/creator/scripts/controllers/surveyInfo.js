// all url endpoints
const URL_SURVEY_INFO =
  "https://survii.000webhostapp.com/api/creators/v2/surveyInfo.php";
const SURVEY_ID = Cookies.get("viewSurveyId");
var surveyData = {};

if (SURVEY_ID === undefined) {
  alert("Invalid operation: Missing parameters. Redirecting to dashboard...");
  window.location = "index.html";
}

$(".surveyInfo").hide();
const renderSurveyData = res => {
  // display error if api response is not json - possible error
  if (!(typeof res === "object" && res !== null)) {
    $(".surveyLoading").text("A problem occured while getting survey info");
    return;
  }
  // display error if post request was not successful
  if (!res.success) {
    $(".surveyLoading").text(res.message);
    return;
  }
  // display error if no survey information was found
  if (res.data.length < 1) {
    $(".surveyLoading").text("Unable to get survey information");
    return;
  }

  // render survey info
  const survey = res.data;
  $("#surveyTitle").val(survey.surveyInfo.title);
  $("#surveyDesc").val(survey.surveyInfo.description);

  const itemCount = survey.surveyItems.length;
  $("#surveyItemCount").val(itemCount);

  $(".surveyLoading").hide();
  $(".surveyInfo").show();

  surveyData = survey;

  surveyData.surveyItems = surveyData.surveyItems.map(item => {
    item.choices = item.choices.map(choice => {
      let votes = 0;

      surveyData.responses.map(response => {
        if (response.choiceId === choice.choiceId) votes++;
      });

      return {
        choiceId: choice.choiceId,
        description: choice.description,
        orderIndex: choice.orderIndex,
        votes
      };
    });
    return item;
  });

  surveyData.surveyItems.map((item, key) => {
    item.choices = item.choices.sort((a, b) =>
      a.orderIndex > b.orderIndex ? 1 : -1
    );

    let totalResponsePerItem = 0;

    surveyData.responses.map(response => {
      if (response.itemId === item.itemId) totalResponsePerItem++;
    });

    const htmlContent = SurveyItem(key + 1, item, totalResponsePerItem);
    $(".con-results").append(htmlContent);
  });

  Object.freeze(surveyData);
  console.log(surveyData);

  if (surveyData.surveyInfo.isClosed === "false") {
    $("#con-actionBtns").prepend(
      `<button id="closeSurvey" class="closeOpen btn btn-secondary btn-sm rounded-0"><span class="fa fa-lock mr-1"></span>Close</button>`
    );
  } else {
    $("#con-actionBtns").prepend(
      `<button id="openSurvey" class="closeOpen btn btn-success btn-sm rounded-0"><span class="fa fa-lock-open mr-1"></span>Open</button>`
    );
  }

  $("#closeSurvey").click(function() {
    toggleCloseSurvey(Cookies.get("viewSurveyId"), true);
  });
  $("#openSurvey").click(function() {
    toggleCloseSurvey(Cookies.get("viewSurveyId"), false);
  });
};

// POST request to get survey data by survey ID
HttpRequest(
  URL_SURVEY_INFO,
  "POST",
  { surveyId: SURVEY_ID, creatorId: userData.username },
  renderSurveyData,
  false
);
