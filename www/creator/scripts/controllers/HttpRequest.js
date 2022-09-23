// custom made handler for all http requests
const HttpRequest = (url, type, data, callback, doneFunction) => {
  const result = $.ajax({ url, type, data })
    // callback function if request succeeds
    .done(function(response) {
      callback(response);
    })
    // callback function if request fails
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error(jqXHR);
      callback({
        data: [],
        success: false,
        message: `${textStatus} ${jqXHR.status}: ${errorThrown}`
      });
    })
    // callback function regardless if request succeeds or fails
    .always(function() {
      if (doneFunction) {
        doneFunction();
      }
    }).responseText;
  return result;
};
