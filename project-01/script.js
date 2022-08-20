const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote");
const twitter = document.querySelector(".twitter");
const loader = document.querySelector("#loader");
const quoteContainer = document.querySelector(".quote-container");

// Show loader
function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loader
function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

let apiQuotes = [];

// Show New Quote
function newQuote() {
  showLoader();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (quote !== undefined) {
    if (quote.text.length > 80) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = quote.text;

    if (!quote.author) {
      author.textContent = "Unknown Author";
    } else {
      author.textContent = quote.author;
    }
    hideLoader();
  } else {
    console.log(
      "Whoops, something went wrong: type.fit/api/quotes is not available"
    );
  }
}

// Get Quotes
async function getQuotes() {
  showLoader();
  const config = "https://type.fit/api/quotes";

  try {
    const response = await fetch(config);
    apiQuotes = await response.json();
    newQuote();
  } catch (err) {
    console.log("Error getting quotes");
  }
}

// Tweet Quotes
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}
// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitter.addEventListener("click", tweetQuote);

// On Load:
getQuotes();
