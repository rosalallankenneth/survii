$(document).ready(function() {
  // add click events for navbar togglers
  $("#links").click(() => closeSideDrawer());
  $("#account-links").click(() => closeSideDrawer());
  $("#side-drawer-void").click(() => closeSideDrawer());
  $("#close-drawer").click(() => closeSideDrawer());
  $("#drawer-toggler").click(() => openSideDrawer());
  $("#navbar-username").text(userData.username);
  $("#link-logout").click(function() {
    logoutCreator();
  });
});

// slides navbar drawer to right to show
function openSideDrawer() {
  $("#side-drawer").css("left", "0");
  $("#side-drawer-void").addClass("d-block");
  $("#side-drawer-void").removeClass("d-none");
}

// slides navbar drawer to left to hide
function closeSideDrawer() {
  $("#side-drawer").css("left", "-336px");
  $("#side-drawer-void").addClass("d-none");
  $("#side-drawer-void").removeClass("d-block");
}

function logoutCreator() {
  Cookies.remove("lastname");
  Cookies.remove("firstname");
  Cookies.remove("userType");
  Cookies.remove("creatorId");

  window.location = "../login.html";
}
