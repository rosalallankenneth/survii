const SurveyItem = (
  itemNum,
  { itemId, description, choices },
  totalResponses
) => {
  let htmlContent = `<div id="${itemId}" class="item my-4">
      <p class="itemDesc lead">
        <span class="itemNo mr-2">${itemNum}.</span>
        <span>${description}</span>
      </p>
  <div class="choices mx-2 mx-md-4 mx-sm-3">`;

  choices.map(choice => {
    const votePercent = (choice.votes / totalResponses) * 100;
    htmlContent += Choice(choice, votePercent);
  });

  htmlContent += `</div></div>`;
  return htmlContent;
};

const Choice = ({ choiceId, description, votes }, votePercent) => {
  return `
    <div class="choice mt-4" id="${choiceId}">
      <div class="choiceInfo">  
        <div class="choiceDesc">
          ${description}
        </div>
        <span class="votes font-weight-bold">
          ${votes}
        </span>
      </div>
      <div class="bar mt-2">
        <div class="bg-info" style="width: ${votePercent}%">&nbsp;</div>
      </div>
    </div>
  `;
};
