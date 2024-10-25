const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
getQuote(apiUrl);
