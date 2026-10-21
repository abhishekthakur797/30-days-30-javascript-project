const form = document.querySelector(".input-box");
const inputDate = document.getElementById("inputDate");
const result = document.getElementById("result");

// Stop the date picker from allowing future dates ("sv-SE" formats as YYYY-MM-DD in local time).
inputDate.max = new Date().toLocaleDateString("sv-SE");

function calculateAge(event) {
  event.preventDefault();

  if (!inputDate.value) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  // Parse "YYYY-MM-DD" as a local date (new Date("YYYY-MM-DD") would use UTC).
  const [year, month, day] = inputDate.value.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Birth date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Borrow days from the previous month
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // Borrow months from the previous year
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`;
}

form.addEventListener("submit", calculateAge);
