function filterByAge(candidate) {
  return candidate.age <= 50;
}

function filterByScore(candidate) {
  return candidate.score >= 75;
}

function filterByServiceRecord(candidate) {
  return candidate.serviceRecord >= 5;
}

function sortByScore(candidates) {
  return candidates.slice().sort((a, b) => b.score - a.score);
}

function getMeanAge(candidates) {
  return candidates.reduce((acc, x) => acc + x.age, 0) / candidates.length;
}

function getNamesOnly(candidate) {
  return candidate.name;
}

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
