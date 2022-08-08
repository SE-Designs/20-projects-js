const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote');
const twitter = document.querySelector('.twitter');

let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (quote.text.length > 80) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
    
    if (!quote.author) {
        author.textContent = 'Unknown Author';
    } else {
        author.textContent = quote.author;
    }
}

async function getQuotes() {
    const config = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(config);
        apiQuotes = await response.json();
        newQuote();
    } catch (err) {
        console.log('Error getting quotes');
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitter.addEventListener('click', tweetQuote);

getQuotes();