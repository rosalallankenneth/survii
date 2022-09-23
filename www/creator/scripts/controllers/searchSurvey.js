$(document).ready(function() {
  $("#btn-search-all").click(function() {
    const searchMode = $(this).attr("data-searchMode");

    if (searchMode === "false") {
      $("#txt-search-all")
        .attr("disabled", false)
        .focus();

      $(this).attr("data-searchMode", "true");
      $(this)
        .addClass("btn-dark")
        .removeClass("btn-success");
      $("#icon-searchAll")
        .removeClass("fa-search")
        .addClass("fa-times");
    } else {
      $("#txt-search-all")
        .attr("disabled", true)
        .val("");

      $(this).attr("data-searchMode", "false");
      $(this)
        .addClass("btn-success")
        .removeClass("btn-dark");
      $("#icon-searchAll")
        .removeClass("fa-times")
        .addClass("fa-search");

      let allSurveysHtml = "";
      surveys.map(survey => {
        allSurveysHtml += DashboardSurveyBox(survey);
        $("#container-yourSurveys .row").html(allSurveysHtml);
      });

      // $("#container-yourSurveys .row .survey-box").click(function() {
      //   Cookies.set("viewSurveyId", $(this).attr("id"), {
      //     path: "survey.html"
      //   });
      //   window.location = "survey.html";
      // });
    }
  });

  $("#txt-search-all").keyup(function() {
    const searchItem = $(this).val();

    $("#container-yourSurveys .row").html(
      `<p class="fade-msg container lead text-center col-12 py-2 bg-success text-white">Showing results...</p>`
    );

    const searchResults = surveys.filter(survey =>
      survey.title.toLowerCase().includes(searchItem)
    );

    if (searchResults.length <= 0) {
      $("#container-yourSurveys .row").append(
        `<p class="search-msg container lead text-center col-12">There was no match for your search.</p>`
      );
    } else {
      searchResults.map(survey => {
        const resultsHtml = DashboardSurveyBox(survey);
        $("#container-yourSurveys .row").append(resultsHtml);
      });

      // $("#container-yourSurveys .row .survey-box").click(function() {
      //   Cookies.set("viewSurveyId", $(this).attr("id"), {
      //     path: "survey.html"
      //   });
      //   window.location = "survey.html";
      // });
    }

    setTimeout(function() {
      $(".fade-msg").fadeOut("fast");
    }, 1000);
  });
});
