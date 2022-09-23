// all url endpoints
const URL_GET_STATS = "https://survii.000webhostapp.com/api/admin/getStats.php";

const renderStats = res => {
  $("#totalUsers").text(res.data.totalUsers);
  $("#totalRespondents").text(res.data.totalRespondents);
  $("#totalCreators").text(res.data.totalCreators);
  $("#totalFeedbacks").text(res.data.totalFeedbacks);
};

HttpRequest(URL_GET_STATS, "GET", {}, renderStats, false);
