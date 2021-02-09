// first solution
let storage = [];
const colourPriorities = {
  YELLOW: 1,
  RED: 2,
  GREEN: 3,
  BLUE: 4,
  GREY: 5,
};

function store(rangesOfIntegers, colour) {
  storage.push({
    lowerBound: Number(rangesOfIntegers.slice(0, 2)),
    upperBound: Number(rangesOfIntegers.slice(3, 5)),
    colour: colour,
    priority: colourPriorities.colour,
  });
}

function get(stringShowsInteger) {
  let filteredStorageForSpecificInteger = storage.filter(
    (eachObject) =>
      eachObject.lowerBound <= Number(stringShowsInteger) &&
      Number(stringShowsInteger) <= eachObject.upperBound
  );
  if (filteredStorageForSpecificInteger.length >= 1) {
    filteredStorageForSpecificInteger.sort(
      (firstObject, secondObject) =>
        firstObject.priority - secondObject.priority
    );
    return filteredStorageForSpecificInteger[0].colour;
  } else if (filteredStorageForSpecificInteger.length === 0) {
    return "GRAY";
  }
}

// Extra Idea :
function resetStorage() {
  return (storage = []);
}

// Apple Examples :
console.log("Apple Example Results :");
store("34-78", "RED");
store("31-41", "YELLOW");
store("64-98", "GREEN");
console.log(get("31"));
console.log(get("39"));
console.log(get("50"));
console.log(get("68"));
console.log(get("91"));
console.log(get("99"));
store("90-99", "BLUE");
console.log(get("91"));
console.log(get("99"));
console.log("----------------------------");

// My Examples :
console.log("My Examples Results :");
resetStorage();
store("01-50", "RED");
store("15-80", "BLUE");
console.log(get("49"));
console.log(get("50"));
console.log(get("79"));
store("01-49", "YELLOW");
console.log(get("01"));
console.log(get("51"));
console.log(get("49"));
console.log(get("00"));
store("70-97", "GREEN");
store("69-99", "GRAY");
console.log(get("71"));
console.log(get("80"));
console.log(get("97"));
console.log(get("99"));
