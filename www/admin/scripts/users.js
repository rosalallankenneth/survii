const URL_GET_RESPONDENTS = "https://survii.000webhostapp.com/api/admin/userRespondents.php";
const URL_GET_CREATORS = "https://survii.000webhostapp.com/api/admin/userCreators.php";
const URL_GET_ADMINS = "https://survii.000webhostapp.com/api/admin/userAdmins.php";

// init datatables
var dtRespondents = $("#tableRespondents").DataTable({
  responsive: true,
  ajax: {
    type: "GET",
    url: URL_GET_RESPONDENTS,
    dataSrc: function(json) {
      setTimeout(function() {
        addResBtnEvents();
      }, 1000);
      return json.data;
    }
  },
  columns: [
    { data: "username" },
    {
      data: "lastname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "firstname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "username",
      render: function(data) {
        return `
        <button id="edit-${data}" data-toggle="modal" data-target="#modalEdit" class="btn btn-res btn-edit btn-sm btn-info mt-1"><span class="fa fa-edit"></span></button>
        <button id="del-${data}" data-toggle="modal" data-target="#modalDelete" class="btn btn-res btn-delete btn-sm btn-danger mt-1"><span class="fa fa-trash"></span></button>
        `;
      }
    }
  ]
});

var dtCreators = $("#tableCreators").DataTable({
  responsive: true,
  ajax: {
    type: "GET",
    url: URL_GET_CREATORS,
    dataSrc: function(json) {
      setTimeout(function() {
        addCreBtnEvents();
      }, 1000);
      return json.data;
    }
  },
  columns: [
    { data: "username" },
    {
      data: "lastname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "firstname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "username",
      render: function(data) {
        return `
        <button id="edit-${data}" data-toggle="modal" data-target="#modalEdit" class="btn btn-cre btn-edit btn-sm btn-info mt-1"><span class="fa fa-edit"></span></button>
        <button id="del-${data}" data-toggle="modal" data-target="#modalDelete" class="btn btn-cre btn-delete btn-sm btn-danger mt-1"><span class="fa fa-trash"></span></button>
        `;
      }
    }
  ]
});

var dtAdmins = $("#tableAdmins").DataTable({
  responsive: true,
  ajax: {
    type: "GET",
    url: URL_GET_ADMINS,
    dataSrc: function(json) {
      setTimeout(function() {
        addAdmBtnEvents();
      }, 1000);
      return json.data;
    }
  },
  columns: [
    { data: "username" },
    {
      data: "lastname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "firstname",
      render: function(data) {
        return `<p>${data}</p>`;
      }
    },
    {
      data: "username",
      render: function(data) {
        return `
        <button id="edit-${data}" data-toggle="modal" data-target="#modalEdit" class="btn btn-adm btn-edit btn-sm btn-info mt-1"><span class="fa fa-edit"></span></button>
        <button id="del-${data}" data-toggle="modal" data-target="#modalDelete" class="btn btn-adm btn-delete btn-sm btn-danger mt-1"><span class="fa fa-trash"></span></button>
        `;
      }
    }
  ]
});

$(document).ready(function() {
  $("#cancelDelete").click(function() {
    $("#delUsername").text("");
  });

  $("#confirmDelete").click(function() {
    const delID = $("#delUsername").text();

    deleteUser(delID);
  });

  $("#confirmUpdate").click(function() {
    const username = $("#username").val();
    const origUsername = $("#origUsername").val();
    const lastname = $("#lastname").val();
    const firstname = $("#firstname").val();

    if (username === "" || lastname === "" || firstname === "") {
      $("#btnLogin").attr("disabled", false);
    }
    if (username === "") {
      AlertMessage("Please enter a username.", "warning");
      return;
    }
    if (lastname === "") {
      AlertMessage("Please enter a lastname.", "warning");
      return;
    }
    if (firstname === "") {
      AlertMessage("Please enter a firstname.", "warning");
      return;
    }

    updateUser({ origUsername, username, lastname, firstname });
  });
});

const addResBtnEvents = () => {
  $(".btn-edit.btn-res").click(function() {
    const editID = $(this)
      .attr("id")
      .split("-")[1];
    editUser(editID);
  });
  $(".btn-delete.btn-res").click(function() {
    const delID = $(this)
      .attr("id")
      .split("-")[1];
    $("#delUsername").text(delID);
  });
};

const addCreBtnEvents = () => {
  $(".btn-edit.btn-cre").click(function() {
    const editID = $(this)
      .attr("id")
      .split("-")[1];
    editUser(editID);
  });
  $(".btn-delete.btn-cre").click(function() {
    const delID = $(this)
      .attr("id")
      .split("-")[1];
    $("#delUsername").text(delID);
  });
};

const addAdmBtnEvents = () => {
  $(".btn-edit.btn-adm").click(function() {
    const editID = $(this)
      .attr("id")
      .split("-")[1];
    editUser(editID);
  });
  $(".btn-delete.btn-adm").click(function() {
    const delID = $(this)
      .attr("id")
      .split("-")[1];
    $("#delUsername").text(delID);
  });
};
