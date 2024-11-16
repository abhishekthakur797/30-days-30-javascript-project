const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".button-colors button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    container.classList.remove(
      "bg-black",
      "bg-green-600",
      "bg-blue-600",
      "bg-red-600",
      "bg-yellow-500",
      "bg-purple-600",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-600",
      "bg-gray-700",
      "bg-indigo-600"
    );
    const newColor = button.classList[0];
    container.classList.add(newColor);
  });
});
