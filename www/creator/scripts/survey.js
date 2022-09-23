$(document).ready(function() {
  $("#confirmDelete").click(function() {
    $("#cancelDelete").click();
    deleteSurvey(Cookies.get("viewSurveyId"));
  });

  $("#editSurvey").click(function() {
    $(this)
      .parent()
      .children()
      .hide();

    $(this).parent().append(` 
      <button id="cancelUpdate" class="btn btn-dark btn-sm rounded-0">
        <span class="fa fa-times mr-1"></span>
        Cancel
      </button> 
      <button id="updateSurvey" class="btn btn-primary btn-sm rounded-0">
        <span class="fa fa-check mr-1"></span>
        Update
      </button>
    `);

    addNewClickEvents();
    toggleDisableFormControls(false);
  });
});

const toggleDisableFormControls = disabled => {
  $(".editable").attr("disabled", disabled);

  if (disabled) {
    $(".editable").removeClass("bg-white");
    $(".editable").addClass("bg-light");
  } else {
    $(".editable").removeClass("bg-light");
    $(".editable").addClass("bg-white");
    $("#surveyTitle").focus();
  }
};

const addNewClickEvents = () => {
  $("#cancelUpdate").click(function() {
    $("#surveyTitle").val(surveyData.surveyInfo.title);
    $("#surveyDesc").val(surveyData.surveyInfo.description);
    $("#surveyCreator").val(surveyData.surveyInfo.creatorId);

    const itemCount = surveyData.surveyItems.length;
    $("#surveyItemCount").val(itemCount);
    toggleDisableFormControls(true);

    $(this).remove();
    $("#updateSurvey").remove();
    $(".closeOpen").show();
    $("#editSurvey").show();
    $("#deleteSurvey").show();
  });

  $("#updateSurvey").click(function() {
    const payload = {
      surveyId: surveyData.surveyInfo.surveyId,
      creatorId: surveyData.surveyInfo.creatorId,
      title: $("#surveyTitle").val(),
      description: $("#surveyDesc").val()
    };
    $(this).attr("disabled", true);
    $("#cancelUpdate").attr("disabled", true);
    submitUpdateRequest(payload);
  });
};
