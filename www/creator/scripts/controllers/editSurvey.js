const URL_DELETE_SURVEY =
  "https://survii.000webhostapp.com/api/creators/v2/deleteSurvey.php";
const URL_CLOSE_SURVEY =
  "https://survii.000webhostapp.com/api/creators/v2/toggleCloseSurvey.php";
const URL_UPDATE_SURVEY =
  "https://survii.000webhostapp.com/api/creators/v2/updateSurvey.php";

const deleteSurvey = surveyId => {
  HttpRequest(
    URL_DELETE_SURVEY,
    "POST",
    { surveyId, creatorId: userData.username },
    confirmDelete,
    false
  );
};

const confirmDelete = res => {
  if (res.success) {
    AlertMessage(res.message + " Redirecting to dashboard...", "success");
    setTimeout(() => {
      window.location = "index.html";
    }, 3000);
  } else {
    AlertMessage(res.message, "danger");
  }
};

const toggleCloseSurvey = (surveyId, close) => {
  HttpRequest(
    URL_CLOSE_SURVEY,
    "POST",
    { surveyId, creatorId: userData.username, close },
    confirmClose,
    false
  );
};

const confirmClose = res => {
  if (res.success) {
    AlertMessage(res.message + " Updating page...", "success");
    setTimeout(() => {
      window.location = "survey.html";
    }, 3000);
  } else {
    AlertMessage(res.message, "warning");
  }
};

const submitUpdateRequest = payload => {
  HttpRequest(URL_UPDATE_SURVEY, "POST", payload, verifyUpdate, false);
};

const verifyUpdate = res => {
  console.log(res);
  if (res.success) {
    AlertMessage(res.message + " Updating page...", "success");
    setTimeout(() => {
      window.location = "survey.html";
    }, 2000);
  } else {
    AlertMessage(res.message, "warning");
    $("#updateSurvey").attr("disabled", false);
    $("#cancelUpdate").attr("disabled", false);
  }
};
