const fetch = require("node-fetch");

async function request(average = true) {
  const url = `https://discordstats.xyz/friends/${average ? "average" : ""}`;
  return await fetch(url)
    .then((res) => res.json());
}

module.exports = request;