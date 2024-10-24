// Function to calculate age
function calculateAge() {
  // Get input value
  const inputDate = document.getElementById("inputDate").value;

  // Validate input
  if (!inputDate) {
    alert("Please enter a valid date");
    return;
  }

  const birthDate = new Date(inputDate);
  const today = new Date();

  // Validate birth date is not in future
  if (birthDate > today) {
    alert("Birth date cannot be in the future");
    return;
  }

  // Calculate years
  let yearDiff = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  // Adjust for negative month or day differences
  if (dayDiff < 0) {
    monthDiff--;
    // Get days in previous month
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    dayDiff += lastMonth.getDate();
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  // Create result string
  const result = `Your age is: ${yearDiff} years, ${monthDiff} months, and ${dayDiff} days`;

  // Display result
  document.querySelector("p").innerText = result;
}

// Add event listener to button
document.querySelector("button").addEventListener("click", calculateAge);
