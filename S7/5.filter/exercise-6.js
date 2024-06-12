const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newArray = streamers.filter((streamer) => {
  return streamer.gameMorePlayed.includes("Legends");
});
console.log(newArray);

const mapstreamers = streamers.map((stream) => {
  if (stream.age > 35) {
    return stream.gameMorePlayed.toUpperCase();
  }
});
console.log(mapstreamers);
