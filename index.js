const filterByAge = (el) => el.age < 50;

const filterByScore = (el) => el.score > 75;

const filterByServiceRecord = (el) => el.serviceRecord > 5;

const sortByScore = (candidates) => {
  const sortedCandidates = candidates.map((el) => el)
  return sortedCandidates.sort((a, b) => b.score - a.score)
};

const getMeanAge = (candidates) => {
  const arrayOfAge = candidates.map((el) => el.age).map((el) => el)
  let sumAge = 0;
  for (let i = 0; i < arrayOfAge.length; i++) {
    sumAge += arrayOfAge[i]
  }
  return sumAge / candidates.length
};

const getMeanAgeReduce = (candidates) => {
  const sumAge = candidates.reduce((acc, el) => (acc + el.age), 0)
  return sumAge / candidates.length
};

const getNamesOnly = (el) => el.name;


module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNamesOnly,
};
