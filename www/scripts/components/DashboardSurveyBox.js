const DashboardSurveyBox = ({ surveyId, title, creator, description }) => {
  return `
    <div id="${surveyId}" class="survey-box col-md-6 col-12">
      <div class="card card-survey">
        <div class="card-body">
          <h5 class="card-title">
            ${title}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            By ${creator}
          </h6>
          <p class="card-text mt-3">
            ${description}
          </p>
        </div>
      </div>
    </div>
  `;
};
