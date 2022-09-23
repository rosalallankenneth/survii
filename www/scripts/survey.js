$(document).ready(function() {
  $("#btn-takeSurvey").click(function() {
    if (
      $(this)
        .text()
        .trim() === "Cancel"
    ) {
      $("#itemsContainer").hide();
      $(this)
        .removeClass("btn-cancelSurvey")
        .text("Take Survey");
      return;
    }
    let surveyItemsHtml = surveyData.surveyItems.map((item, key) => {
      item.choices = item.choices.sort((a, b) =>
        a.orderIndex > b.orderIndex ? 1 : -1
      );
      return SurveyItem(key + 1, item.itemId, item.description, item.choices);
    });
    surveyItemsHtml += `</div></div>
      <div class="mt-4 text-right">
        <button id="btn-footerCancel" class="btn btn-cancelSurvey border-0 rounded-0 mx-1 mt-2">
          <span class="fa fa-eject mr-2"></span>
          Cancel
        </button>
        <button id="btn-submitResponse" class="btn btn-confirms text-white border-0 rounded-0 mx-1 mt-2">
          <span class="fa fa-paper-plane mr-2"></span>
          Submit Response
        </button>
      </div>
      `;

    $("#itemsContainer")
      .html(surveyItemsHtml)
      .show();
    addChoiceClickEvents();
    $(this)
      .addClass("btn-cancelSurvey")
      .text("Cancel");

    $("#btn-submitResponse").click(function() {
      handleResponseSubmit();
    });
  });
});

const addChoiceClickEvents = () => {
  $(".choice span").click(function() {
    $(this)
      .siblings()
      .prop("checked", true);
  });
  $("#btn-footerCancel").click(function() {
    $("#btn-takeSurvey").click();
  });
};
