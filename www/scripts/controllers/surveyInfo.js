// all url endpoints
const URL_SURVEY_INFO =
  "https://survii.000webhostapp.com/api/respondents/v2/surveyInfo.php";
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
  $("#surveyTitle").text(survey.surveyInfo.title);
  $("#surveyDesc").text(survey.surveyInfo.description);
  $("#surveyCreator").text(survey.surveyInfo.creatorId);

  const itemCount = survey.surveyItems.length;
  $("#surveyItemCount").text(itemCount);

  $(".surveyLoading").hide();
  $(".surveyInfo").show();
  if (res.data.surveyInfo.isTaken) {
    $("#btn-takeSurvey").remove();
    $(".surveyInfo").parent().before(`
      <div class="container alert-success py-4 mb-4">
        <p class="lead text-center m-0">Your response has been submitted. Thank you!</p>
      </div>
    `);
  } else {
    $("#btn-takeSurvey").removeClass("d-none");
  }

  surveyData = survey;

  Object.freeze(surveyData);
};

// POST request to get survey data by survey ID
HttpRequest(
  URL_SURVEY_INFO,
  "POST",
  { surveyId: SURVEY_ID, respondentId: userData.username },
  renderSurveyData,
  false
);
