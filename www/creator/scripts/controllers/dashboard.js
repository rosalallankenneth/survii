// all url endpoints
const URL_GET_ROOMS =
  "https://survii.000webhostapp.com/api/creators/v2/surveys.php";
var surveys = [];

// display all surveys data
const renderAllSurveys = res => {
  allSurveysHtml = "";
  openSurveysHtml = "";
  closedSurveysHtml = "";

  openSurveysList = [];
  closedSurveysList = [];

  if (typeof res === "object" && res !== null) {
    if (!res.success) {
      messageAllSurveyTabs(res.message);
      return;
    }
    if (res.data.length > 1) {
      res.data.map(survey => {
        allSurveysHtml += DashboardSurveyBox(survey);
        if (survey.isClosed === "false") {
          openSurveysList = [...openSurveysList, survey];
        } else {
          closedSurveysList = [...closedSurveysList, survey];
        }
      });

      $("#container-yourSurveys .row").html(allSurveysHtml);

      $("#count-yourSurveys").text(res.data.length);
      $("#count-openSurveys").text(openSurveysList.length);
      $("#count-closedSurveys").text(closedSurveysList.length);

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

  if (openSurveysList.length > 0) {
    openSurveysList.map(survey => {
      openSurveysHtml += DashboardSurveyBox(survey);
    });
  } else {
    openSurveysHtml = `<p class="surveys-message container lead text-center col-12">Nothing so far...</p>`;
  }

  if (closedSurveysList.length > 0) {
    closedSurveysList.map(survey => {
      closedSurveysHtml += DashboardSurveyBox(survey);
    });
  } else {
    closedSurveysHtml = `<p class="surveys-message container lead text-center col-12">Nothing so far...</p>`;
  }

  $("#container-openSurveys .row").html(openSurveysHtml);
  $("#container-closedSurveys .row").html(closedSurveysHtml);

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
  $("#container-yourSurveys .row").html(msgHtml);
  $("#container-openSurveys .row").html(msgHtml);
  $("#container-closedSurveys .row").html(msgHtml);
};

// GET request to get all surveys basic data
HttpRequest(
  URL_GET_ROOMS,
  "GET",
  { creatorId: userData.username },
  renderAllSurveys,
  false
);
