const SurveyItem = (number, itemId, description, choices) => {
  let htmlContent = `  
  <div id="${itemId}" class="item pt-4">
    <div class="description mb-2 lead">
      <span>${number}.</span><span class="ml-2">${description}</span>
    </div>
    <div class="choicesContainer px-3">
  `;
  choices.map(choice => {
    htmlContent += `
      <div class="choice">
        <input name="choices-${itemId}" class="choice-radio mr-2" type="radio" id="${choice.choiceId}" />
        <span>${choice.description}</span>
      </div>
    `;
  });
  htmlContent += `</div></div>`;
  return htmlContent;
};
