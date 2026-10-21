const apiUrl = "https://dummyjson.com/quotes/random";

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

// Used if the API can't be reached.
const backupQuotes = [
  { quote: "Your talent is God's gift to you. What you do with it is your gift back to God.", author: "Leo Buscaglia" },
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
];

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  let data;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Request failed");
    data = await response.json();
  } catch {
    data = backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
  }

  quoteText.textContent = `"${data.quote}"`;
  authorText.textContent = `— ${data.author}`;
}

function tweetQuote() {
  const text = `${quoteText.textContent} ${authorText.textContent}`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank", "width=600,height=400");
}

newQuoteBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweetQuote);

getQuote();
