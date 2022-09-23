const AlertMessage = (message, type) => {
  const alertHtml = `
    <div class="alert alert-message alert-${type} rounded-0 pr-1 fade">
      <span class="pr-2">${message}</span>
      <span class="fa fa-times"></span>
    </div>
  `;

  $(".alert-message").remove();
  $("body").append(alertHtml);

  $(".alert-message").addClass("show");

  addClickDismiss();
  setTimeout(function() {
    $(".alert-message").fadeOut();
  }, 10000);
};

const addClickDismiss = () => {
  const alertDismiss = document.querySelector(".alert-message .fa");
  alertDismiss.addEventListener("click", () => {
    document.querySelector(".alert-message").classList.remove("show");
  });
};
