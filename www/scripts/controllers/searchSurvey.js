$(document).ready(function() {
  $(".form-search").submit(function(e) {
    e.preventDefault();

    const searchItem = $("#txt-search")
      .val()
      .toLowerCase();
    const checkBoxes = evaluateCheckboxes();
    const { title, description, creator } = checkBoxes;

    if (title || description || creator) {
      $("#container-search .row").html(
        `<p class="fade-msg container lead text-center col-12 py-2 bg-success text-white">Showing results...</p>`
      );
      let isEmpty = true;
      surveys.map(survey => {
        if (title) {
          if (survey.title.toLowerCase().includes(searchItem)) {
            const surveyHtml = DashboardSurveyBox(survey);
            $("#container-search .row").append(surveyHtml);
            isEmpty = false;
            return;
          }
        }
        if (description) {
          if (survey.description.toLowerCase().includes(searchItem)) {
            const surveyHtml = DashboardSurveyBox(survey);
            $("#container-search .row").append(surveyHtml);
            isEmpty = false;
            return;
          }
        }
        if (creator) {
          if (survey.creator.toLowerCase().includes(searchItem)) {
            const surveyHtml = DashboardSurveyBox(survey);
            $("#container-search .row").append(surveyHtml);
            isEmpty = false;
            return;
          }
        }
      });

      if (isEmpty) {
        $("#container-search .row").append(
          `<p class="search-msg container lead text-center col-12">There was no match for your search.</p>`
        );
      } else {
        $("#container-search .row .survey-box").click(function() {
          Cookies.set("viewSurveyId", $(this).attr("id"), {
            path: "survey.html"
          });
          window.location = "survey.html";
        });
      }
      setTimeout(function() {
        $(".fade-msg").fadeOut("fast");
      }, 1000);
    } else {
      $("#container-search .row").html(
        `<p class="search-msg container lead text-center col-12">Make sure you have checked at least one of the search parameters (checkboxes)</p>`
      );
    }
  });
});

const evaluateCheckboxes = () => {
  const checkTitle = $("#checkTitle");
  const checkDescription = $("#checkDescription");
  const checkCreator = $("#checkCreator");
  let checks = {
    title: false,
    description: false,
    creator: false
  };

  if (checkTitle.attr("checked") !== undefined) {
    checks.title = true;
  }
  if (checkDescription.attr("checked") !== undefined) {
    checks.description = true;
  }
  if (checkCreator.attr("checked") !== undefined) {
    checks.creator = true;
  }

  return checks;
};
