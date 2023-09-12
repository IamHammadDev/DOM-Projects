let element = document.querySelectorAll(".elem");

element.forEach((val) => {
  console.log(val.childNodes[3]);
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
    
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (det) => {
    val.childNodes[3].style.left = det.x + "px";
    val.childNodes[3].style.top = det.y + "px";
  });
});

// let elemImg = document.querySelectorAll(".elem img");

// element.addEventListener("mousemove", function (det) {
//   // console.log(det.x)
//   elemImg.style.left = det.x + "px";
//   elemImg.style.top = det.y + "px";
// });
// element.addEventListener("mouseenter", function (det) {
//   // console.log(det.x)
//   elemImg.style.opacity = 1
// });
// element.addEventListener("mouseleave", function (det) {
//   // console.log(det.x)
//   elemImg.style.opacity = 0
// });
