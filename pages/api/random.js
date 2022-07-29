const quotesJSONArray = require("../../quotesSource.json");
function getRandom(size) {
  return Math.floor(Math.random() * size);
}
let randomIndex = getRandom(quotesJSONArray.length);
let randomQuote = quotesJSONArray[randomIndex];

function random(req, res) {
  res.json({ quote: randomQuote });
}

export default random;
