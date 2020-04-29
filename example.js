const stats = require("discord-stats.js");

stats.servers.get("staff", true).then(console.log); // Get average amount of servers staffed onper person
stats.servers.get("member", false).then(console.log); // Get amounts of sevrers not staff on. Sorted descending

stats.blocked.get().then(console.log); // Get average users blocked per person
stats.blocked.get(false).then(console.log); // Get amounts of users blocked. Sorted descending

stats.hours.get().then(console.log); // Get average amount of hours spent on Discord per day
stats.hours.get(false).then(console.log); // Get amounts of hours spent on Discord per day. Sorted descending

stats.rating.get().then(console.log); // Get the average overall rating of Discord (out of 10)
stats.rating.get(false).then(console.log); // Get ratings of Discord. Sorted descending

stats.friends.get().then(console.log); // Get average amount of friends on Discord per user
stats.friends.get(false).then(console.log); // Get amounts of friends per user on Discord

// Contribute to the project! Fill out the survey here -> https://discordstats.xyz
