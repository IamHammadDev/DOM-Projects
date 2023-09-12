let con = document.querySelector("#container");
let iconLove = document.querySelector("i");
console.log(iconLove);
con.addEventListener("dblclick", function() {
  iconLove.style.transform = "translate(-50%, -50%) scale(1)";
  iconLove.style.opacity = 0.8;
  console.log("Working......");
  setTimeout(() => {
      iconLove.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    iconLove.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
