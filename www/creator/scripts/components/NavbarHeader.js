const NavbarHeader = () => {
  document.write(`
  <!-- navbar header -->
  <nav id="navbar-header" class="navbar navbar-light bg-light fixed-top">
    <!-- drawer toggler -->
    <button id="drawer-toggler" class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- logo -->
    <a class="navbar-brand ml-2 mr-auto" href="index.html"
      >
      <img src="../assets/survii-logo.png" alt="survii-logo"/>
      <span class="text-dark"><small>Creator</small></span>
    </a>

    <!-- user nav-link -->
    <a href="account.html" class="nav-link text-dark">
      <span class="fa fa-user-circle"></span>
      <span id="navbar-username" class="ml-2 d-none d-sm-inline"
        ></span
      >
    </a>
  </nav>
  `);
};
