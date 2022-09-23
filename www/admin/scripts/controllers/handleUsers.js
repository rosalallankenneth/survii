const URL_DELETE_USER = "https://survii.000webhostapp.com/api/admin/deleteUser.php";
const URL_UPDATE_USER = "https://survii.000webhostapp.com/api/admin/updateUser.php";
const URL_RETRIEVE_USER = "https://survii.000webhostapp.com/api/admin/getUser.php";

const deleteUser = username => {
  HttpRequest(URL_DELETE_USER, "POST", { username }, handleDelete, false);
};

const editUser = username => {
  HttpRequest(URL_RETRIEVE_USER, "POST", { username }, handleEdit, false);
};

const updateUser = payload => {
  HttpRequest(URL_UPDATE_USER, "POST", payload, handleUpdate, false);
};

const handleUpdate = res => {
  if (res.success) {
    AlertMessage(res.message, "success");
    dtRespondents.ajax.reload();
    dtCreators.ajax.reload();
    dtAdmins.ajax.reload();
    dtRespondents.draw();
    dtAdmins.draw();
    dtCreators.draw();
  } else {
    AlertMessage(res.message, "warning");
  }
  $("#cancelUpdate").click();
};

const handleDelete = res => {
  if (res.success) {
    AlertMessage(res.message, "success");
    dtRespondents.ajax.reload();
    dtCreators.ajax.reload();
    dtAdmins.ajax.reload();
    dtRespondents.draw();
    dtAdmins.draw();
    dtCreators.draw();
  } else {
    AlertMessage(res.message, "warning");
  }
  $("#cancelDelete").click();
};

const handleEdit = res => {
  if (res.success) {
    $("#username").val(res.data.username);
    $("#origUsername").val(res.data.username);
    $("#lastname").val(res.data.lastname);
    $("#firstname").val(res.data.firstname);
  } else {
    AlertMessage(res.message, "warning");
  }
};
