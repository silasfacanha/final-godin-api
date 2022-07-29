const quotesJSONArray = require("./../../quotesSource.json");
function getRandom(size) {
  return Math.floor(Math.random() * size);
}
const randomIndex = getRandom(quotesJSONArray.length);
const randomQuote = quotesJSONArray[randomIndex];

function random(request, response) {
  response.json({ quote: randomQuote });
}

export default random;
