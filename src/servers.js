const fetch = require("node-fetch");

async function request(type = "total", average = true) {
  const url = `https://discordstats.xyz/servers/${
    type === "member" ? "member/" : type === "staff" ? "staff/" : ""
  }/${average ? "average" : ""}`;
  return await fetch(url)
    .then((res) => res.json());
}

module.exports = request;
