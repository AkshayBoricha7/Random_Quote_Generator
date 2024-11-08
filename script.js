let quoteText = document.querySelector("#quote");
let authorName = document.querySelector("#author");

let categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "art",
  "attitude",
  "best",
  "birthday",
  "change",
  "computers",
  "cool",
  "courage",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "equality",
  "experience",
  "failure",
  "faith",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "funny",
  "future",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "home",
  "humor",
  "imagination",
  "intelligence",
  "jealousy",
  "knowledge",
  "learning",
  "life",
  "love",
  "medical",
  "money",
  "morning",
  "movies",
  "success",
];

let category = categories[Math.floor(Math.random() * categories.length)];

function generateNewQuote() {
  const apiKey = "i0INAyTW6JkfAeEtG0BThw==u0OC0JxXBvqbfBjO";
  const endpoint = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  fetch(endpoint, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      quoteText.innerHTML = data[0].quote;
      authorName.innerHTML = data[0].author;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

generateNewQuote();

function listenAudio() {
  let speaker = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${authorName.innerHTML}`
  );
  window.speechSynthesis.speak(speaker);
}

function copyQuote() {
  navigator.clipboard.writeText(
    quoteText.innerHTML + "   - " + authorName.innerHTML
  );
  temp = document.querySelector(".copyButton").innerHTML;
  document.querySelector(".copyButton").innerHTML = "copied";
  document.querySelector(".copyButton").innerHTML = temp;
}
