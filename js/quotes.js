const quotes = [
  {
    quote: "T1",
    author: "han",
  },
  {
    quote: "T2",
    author: "stark",
  },
  {
    quote: "T3",
    author: "lil",
  },
  {
    quote: "T4",
    author: "robert",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
