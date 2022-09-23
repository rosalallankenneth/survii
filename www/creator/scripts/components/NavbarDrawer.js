const NavbarDrawer = activeMenu => {
  document.write(`
  <!-- navbar drawer -->
  <div id="side-drawer" class="position-fixed">
    <div class="h-100 bg-white">
      <!-- side drawer Title -->
      <div id="drawer-header" class="text-center px-3 py-2 bg-light">
        <span
          class="fa fa-arrow-left py-2 my-1 px-2"
          id="close-drawer"
        ></span>
        <div class="navbar-brand">
          <img src="../assets/survii-logo.png" alt="survii-logo" />
        </div>
      </div>
      <!-- side drawer Links -->
      <ul id="links" class="list-group">
        <a
          id="link-dashboard"
          href="index.html"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-home"></span>
          Dashboard
        </a>
        <a
          id="link-add"
          href="createSurvey.html"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-plus-square"></span>
          Create Survey
        </a>
        <a
          id="link-user"
          href="account.html"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-user"></span>
          Account Settings
        </a>
        <a
          id="link-feedback"
          href="feedback.html"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-user"></span>
          Send Feedback
        </a>
        <a
          id="link-about"
          href="about.html"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-info-circle"></span>
          About
        </a>
        <a
          id="link-logout"
          href="#logout"
          class="list-group-item list-group-item-action border-0 rounded-0"
        >
          <span class="fa fa-sign-out-alt"></span>
          Logout
        </a>
      </ul>
    </div>
  </div>
  <!-- drawer backdrop -->
  <div id="side-drawer-void" class="position-fixed d-none"></div>
  `);

  if (activeMenu !== 0) {
    // add a distinct background to the active menu item
    document
      .querySelector(`#links .list-group-item:nth-child(${activeMenu})`)
      .classList.add("active");
  }
};
