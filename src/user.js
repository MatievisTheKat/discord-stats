const fetch = require("node-fetch");

async function request(username) {
  const url = `https://discordstats.xyz/response/${encodeURIComponent(
    username
  )}`;
  return await fetch(url).then((res) => res.json());
}

module.exports = request;
