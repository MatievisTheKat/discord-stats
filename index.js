const blocked = require("./src/blocked");
const friends = require("./src/friends");
const hours = require("./src/hours");
const rating = require("./src/rating");
const servers = require("./src/servers");
const user = require("./src/user");

module.exports = {
  blocked: { get: blocked },
  friends: { get: friends },
  hours: { get: hours },
  rating: { get: rating },
  servers: { get: servers },
  user: { get: user },
};
