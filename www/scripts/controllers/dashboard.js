// all url endpoints
const URL_GET_ROOMS =
  "https://survii.000webhostapp.com/api/respondents/v2/surveys.php";
var surveys = [];

// display all surveys data
const renderAllSurveys = res => {
  allSurveys = "";
  takenSurveys = "";
  notTakenSurveys = "";

  if (typeof res === "object" && res !== null) {
    if (!res.success) {
      messageAllSurveyTabs(res.message);
      return;
    }
    if (res.data.length > 1) {
      let takenCount = 0;
      let notTakenCount = 0;

      res.data.map(survey => {
        if (survey.isTaken) {
          takenSurveys += DashboardSurveyBox(survey);
          takenCount++;
        } else {
          notTakenSurveys += DashboardSurveyBox(survey);
          notTakenCount++;
        }
        allSurveys += DashboardSurveyBox(survey);
      });

      $("#count-all").text(res.data.length);
      $("#count-taken").text(takenCount);
      $("#count-not-taken").text(notTakenCount);

      surveys = res.data;
      Object.freeze(surveys);
    } else {
      messageAllSurveyTabs("Nothing so far...");
      return;
    }
  } else {
    messageAllSurveyTabs("Cannot fetch surveys.");
    return;
  }

  $("#container-all-surveys .row").html(allSurveys);
  $("#container-taken-surveys .row").html(takenSurveys);
  $("#container-not-taken-surveys .row").html(notTakenSurveys);

  $(".survey-box").click(function() {
    Cookies.set("viewSurveyId", $(this).attr("id"), {
      path: "survey.html"
    });
    window.location = "survey.html";
  });
};

// display messages when needed in survey tabs
const messageAllSurveyTabs = msg => {
  const msgHtml = `<p class="surveys-message container lead text-center col-12">${msg}</p>`;
  $("#container-all-surveys .row").html(msgHtml);
  $("#container-taken-surveys .row").html(msgHtml);
  $("#container-not-taken-surveys .row").html(msgHtml);
};

// GET request to get all surveys basic data
HttpRequest(
  URL_GET_ROOMS,
  "GET",
  { respondentId: userData.username },
  renderAllSurveys,
  false
);
