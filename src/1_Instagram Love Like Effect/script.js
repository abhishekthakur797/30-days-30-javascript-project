var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  console.log("Jai Shree Ram");
  love.style.opacity = 0.7;
  love.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.style.opacity = 0;
  }, 2000);
});

// setTimeOut :: Delay.
// setTimeout(() => {
//   console.log("hey");
// }, 3000);
