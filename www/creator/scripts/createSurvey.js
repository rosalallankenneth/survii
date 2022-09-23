$(document).ready(function() {
  const initItemId = ID();
  $("#addItem").before(CreateItem(initItemId));
  addClickDeleteItem(initItemId);
  addClickAddChoice(initItemId);

  $(".deleteItem").attr("disabled", true);
  $(".deleteChoice").attr("disabled", true);

  $("#addItem").click(function() {
    if (getItemCount() > 5) {
      AlertMessage(
        "The system allows only five(5) survey items for now to limit the server bandwidth and storage.",
        "warning"
      );
      return;
    }
    const newItemId = ID();
    $(this).before(CreateItem(newItemId));
    addClickDeleteItem(newItemId);
    addClickAddChoice(newItemId);
    $(`.deleteItem`).attr("disabled", false);
    $(`.deleteChoice-${newItemId}`).attr("disabled", true);
  });

  $("#form-createSurvey").submit(function(e) {
    e.preventDefault();
    submitNewSurvey();
  });

  // remove this when done testing
  //$("input").attr("required", false);
  //$("textarea").attr("required", false);
});

const addClickDeleteItem = id => {
  $(`#deleteItem-${id}`).click(function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .remove();
    if (getItemCount() <= 1) {
      $(`.deleteItem`).attr("disabled", true);
    }
  });
};

const addClickAddChoice = id => {
  $(`#addChoice-${id}`).click(function() {
    $(this).before(CreateChoice(id));
    addClickDeleteChoice(id);
    $(`.deleteChoice-${id}`).attr("disabled", false);
  });
};

const addClickDeleteChoice = id => {
  $(`.deleteChoice-${id}`).click(function() {
    $(this)
      .parent()
      .remove();
    if (getChoiceCount(id) <= 1) {
      $(`.deleteChoice-${id}`).attr("disabled", true);
    }
  });
};

const getItemCount = () => {
  const items = $(".item").length;
  return items;
};

const getChoiceCount = groupId => {
  const choiceCount = $(`.deleteChoice-${groupId}`).length;
  return choiceCount;
};
