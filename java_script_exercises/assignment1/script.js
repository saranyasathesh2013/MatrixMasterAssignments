const form = document.getElementById("add-items-form");
const table = document
  .getElementById("dataTable")
  .getElementsByTagName("tbody")[0];

form.addEventListener("submit", onBtnClicked);

function onBtnClicked(e) {
  e.preventDefault();

  // Get all the form inputs
  const inputs = form.getElementsByTagName('input');

  // Create a new row
  const newRow = table.insertRow();

  // Loop through each input and insert values into new cells
  for (let i = 0; i < inputs.length; i++) {
      const newCell = newRow.insertCell(i);
      newCell.textContent = inputs[i].value;
  }

  // Clear the form inputs after submission
  form.reset();
}
