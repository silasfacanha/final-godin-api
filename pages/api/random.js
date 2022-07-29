import { NextApiRequest, NextApiResponse } from "next";

const quotesJSONArray = require("../../quotesSource.json");
function getRandom(size) {
  return Math.floor(Math.random() * size);
}
const randomIndex = getRandom(quotesJSONArray.length);
const randomQuote = quotesJSONArray[randomIndex];

function random(req, res) {
  res.json({ quote: randomQuote });
}

export default random;
