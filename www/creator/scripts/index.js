$(document).ready(function() {
  // click events for switching between survey tabs
  $("#card-nav a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $("#card-nav .nav-item").on("click", function() {
    $(this)
      .children()
      .tab("show");
  });
  $(".nav-tabs .nav-item").click(function() {
    $(".nav-tabs .nav-item").removeClass("nav-button-active");
    $(this).addClass("nav-button-active");
  });
  Cookies.remove("viewSurveyId", { path: "survey.html" });
});
