const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

document
  .querySelector('button[data-function="toShowFilterStreamers"]')
  .addEventListener("click", function () {
    const filterText = document
      .querySelector('input[data-function="toFilterStreamers"]')
      .value.toLowerCase();
    const filteredStreamers = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(filterText)
    );
    console.log(filteredStreamers);
  });
