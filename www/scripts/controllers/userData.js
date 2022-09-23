const clearCredentials = () => {
  Cookies.remove("respondentId");
  Cookies.remove("lastname");
  Cookies.remove("firstname");
  Cookies.remove("userType");
};

if (
  Cookies.get("respondentId") === undefined ||
  Cookies.get("lastname") === undefined ||
  Cookies.get("firstname") === undefined ||
  Cookies.get("userType") === undefined
) {
  clearCredentials();
  window.location = "login.html";
}

const userData = {
  username: Cookies.get("respondentId"),
  lastname: Cookies.get("lastname"),
  firstname: Cookies.get("firstname"),
  userType: Cookies.get("userType")
};

// generate a randomize short ID
const ID = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};
