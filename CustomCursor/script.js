let mainDiv = document.querySelector("#main");
let cur = document.querySelector("#cursor");

// cur.style.backgroundColor = "red";
mainDiv.addEventListener("mousemove", function (dets) {
  cur.style.left = dets.x + "px";
  cur.style.top = dets.y + "px";
});
