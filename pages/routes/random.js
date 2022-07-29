const quotesJSONArray = require("./../../quotesSource.json");
function getRandom(size) {
  return Math.floor(Math.random() * size);
}

function random(request, response) {
  const randomIndex = getRandom(quotesJSONArray.length);
  const randomQuote = quotesJSONArray[randomIndex];
  response.json({ quote: randomQuote });
}

export default random;
