function random(request, response) {
  const random = new Date();
  response.json({ date: random });
}

export default random;
