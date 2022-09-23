const URL_GET_FEEDBACKS =
  "https://survii.000webhostapp.com/api/admin/feedbacks.php";

$(document).ready(function() {
  // init datatables
  var datatable = $("#table").DataTable({
    responsive: true,
    ajax: {
      type: "GET",
      url: URL_GET_FEEDBACKS
    },
    columns: [
      { data: "username" },
      {
        data: "email",
        render: function(data) {
          return `<p>${data}</p>`;
        }
      },
      {
        data: "message",
        render: function(data) {
          return `<p>${data}</p>`;
        }
      }
    ]
  });
});
