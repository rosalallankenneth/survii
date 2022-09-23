const DashboardSurveyBox = ({ surveyId, title, dateCreated, description }) => {
  const date = new Date(dateCreated).toDateString();

  return `
    <div id="${surveyId}" class="survey-box col-md-6 col-12">
      <div class="card card-survey">
        <div class="card-body">
          <h5 class="card-title">
            ${title}
          </h5>
          <p class="card-subtitle mb-2 text-muted">
            ${date}
          </p>
          <p class="card-text mt-3">
            ${description}
          </p>
        </div>
      </div>
    </div>
  `;
};
