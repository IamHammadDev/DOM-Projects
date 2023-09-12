let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let flag = 0;

addFriend.addEventListener("click", () => {
  if (flag === 0) {
    addFriend.textContent = "Remove Friend";
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    flag = 1;
} else {
    addFriend.textContent = "Add Friend";
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    flag=0
  }
});
