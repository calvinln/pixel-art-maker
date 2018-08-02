// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submitBtn = document.getElementById('submitBtn');
const table = document.getElementById('pixelCanvas');
const body = document.getElementsByTagName('body')[0];
let drag = false;

body.addEventListener('mouseup', function() {
  drag = false;
});

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  regenerateGrid();
});

function regenerateGrid() {
  table.innerHTML = '';
  let tableBody = document.createElement('tbody');
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  for (let j = 0; j < height; j++) {
    let row = document.createElement('tr');
    for (let i = 0; i < width; i++) {
      let square = document.createElement('td');
      square.style.background = '#FFFFFF';
      square.addEventListener('mouseover', function() {
        let color = document.getElementById('colorPicker').value;
        if (drag) {
          this.style.background = color;
        }
      });

      square.addEventListener('mousedown', function() {
        drag = true;
        let color = document.getElementById('colorPicker').value;
        this.style.background = color;
      });
      row.appendChild(square);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
}

regenerateGrid();
