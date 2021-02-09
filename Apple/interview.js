// first solution
let storage = [];

function store(rangesOfIntegers, colour) {
  if (colour === "YELLOW") {
      priority = 1;
   }
  else if(colour === "RED"){
      priority = 2;
   }
  else if (colour === "GREEN"){
    priority = 3;
  } 
  else if (colour === "BLUE"){
    priority = 4;
  } 
  else if (colour === "GREY"){
    priority = 5;
  }
  storage.push({
    lowerBound: Number(rangesOfIntegers.slice(0, 2)),
    upperBound: Number(rangesOfIntegers.slice(3, 5)),
    colour: colour,
    priority: priority
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
      (firstObject, secondObject) => firstObject.priority - secondObject.priority
    );
    return filteredStorageForSpecificInteger[0].colour
   }
   else if (filteredStorageForSpecificInteger.length === 0) {
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