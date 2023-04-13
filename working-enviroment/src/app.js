const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

function findTheSurvivers(data) {
  const alive = data.filter((item) => item.health > 0);
  return alive;
}
findTheSurvivers(characters);
