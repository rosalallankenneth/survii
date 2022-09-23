const CreateItem = itemId => {
  return (
    `
  <div class="item">
    <div class="form-group">
      <label>Item Description</label>
      <div class="con-itemDesc">
        <input type="text" class="itemDesc form-control rounded-0" required />
        <button id="deleteItem-${itemId}" type="button" class="btn btn-sm btn-danger rounded-0 deleteItem">
          <span class="fa fa-trash"></span>
        </button>
      </div>
    </div>

    <div class="choices form-group pl-4">
      <label>Choices</label>
    ` +
    CreateChoice(itemId) +
    `
      <button id="addChoice-${itemId}" type="button" class="btn btn-light form-control rounded-0 addChoice mt-3">
        Click to add a choice
      </button>
    </div>
  </div>
  `
  );
};

const CreateChoice = id => {
  return `
  <div class="con-choice mb-2">
    <input type="text" class="choice form-control rounded-0" required />
    <button type="button" class="btn btn-sm btn-danger rounded-0 deleteChoice deleteChoice-${id}">
      <span class="fa fa-trash"></span>
    </button>
  </div>
  `;
};
