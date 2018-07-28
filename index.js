// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submitBtn = document.getElementById("submitBtn");
const table = document.getElementById("pixelCanvas");
const body = document.getElementsByTagName("body")[0];
let color;
let drag = false;
let draw = false;

body.addEventListener("mouseup", function() {
  drag = false;
});

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  color = document.getElementById("colorPicker").value;
  regenerateGrid();
});

function regenerateGrid() {
  table.innerHTML = "";
  let tableBody = document.createElement("tbody");
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;

  for (let j = 0; j < height; j++) {
    let row = document.createElement("tr");
    for (let i = 0; i < width; i++) {
      let square = document.createElement("td");
      square.setAttribute("blank", "true");
      square.addEventListener("mouseover", function() {
        if (drag) {
          if (this.getAttribute("blank") === "true" && draw) {
            this.setAttribute("blank", "false");
            this.style.background = color;
          } else if (this.getAttribute("blank") === "false" && !draw) {
            this.setAttribute("blank", "true");
            this.style.background = "#FFFFFF";
          }
        }
      });

      square.addEventListener("mousedown", function() {
        drag = true;
        if (this.getAttribute("blank") === "true") {
          this.setAttribute("blank", "false");
          this.style.background = color;
          draw = true;
        } else {
          this.setAttribute("blank", "true");
          this.style.background = "#FFFFFF";
          draw = false;
        }
      });
      row.appendChild(square);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
}
