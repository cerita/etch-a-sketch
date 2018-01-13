var pixel = document.getElementsByClassName("pixel");
const container = document.querySelector(".grid");
let resetBtn = document.getElementById("reset");
let size = document.querySelector("#size");

function drawGrid(num) {

  let width = container.offsetWidth / num + "px";
  let height = container.offsetHeight / num + "px";

  for (var x = 0; x < num; x++) {
    //create x number of rows
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (var i = 0; i < num; i++) {
      //create x number of divs in each row
      const box = document.createElement("div");

      box.style.width = width;
      box.style.height = height;
      box.classList.add("pixel");

      row.appendChild(box);
    }
  }
}

function sketch() {
  for(var i=0; i < pixel.length; i++) {
    pixel[i].addEventListener("mouseover", function(){
      this.classList.add("pixel-colored");
    })
  }
}

function init() {
  drawGrid(size.value);
  sketch();
}

function reset() {
  container.innerHTML = "";
  init();
}

init();


resetBtn.addEventListener("click", function(){
  reset();
})

size.addEventListener("input", function(e) {
  if (this.value !== 16) {
    reset();
  }
});
