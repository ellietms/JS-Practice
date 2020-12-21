//  how can you compare all of the elements to find the longest common prefix of any two?

function findCommonPrefixes(array) {
  let item;
  let commonPrefixes = [];
  let index = 0;
  // this for ,  goes through each item in the array
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    // this for goes through the array again
    for (let k = 0; k < array.length - 1; k++) {
      let newExample = example.splice(i, 1);
      if (k === 0 && commonPrefixes.length === 0) {
        // this for ,  goes through the length of the item
        for (let j = 0; j < item.length; j++) {
          while (item[j] === " ") {
            if (
              newExample[k]
                .substring(0, j + 1)
                .includes(item.substring(0, j + 1))
            ) {
                commonPrefixes.push(newExample[k].substring(0, j + 1));
            }
          }
        }
      } 
      else if (k !== 0 && commonPrefixes.length !== 0) {
        index = index + 1;
        for (let j = 0; j < item.length; j++) {
          while (item[j] === " ") {
            if (
              newExample[k]
                .substring(0, j + 1)
                .includes(item.substring(0, j + 1))
            ) {
              commonPrefixes[index].push(newExample[k].substring(0, j + 1));
            }
          }
        }
      }
      else{
      console.log("commonPrefixes",commonPrefixes)
      }
    }
  }
   return commonPrefixes; 
}

function findLongestCommonPrefix(array) {
  let prefixes = findCommonPrefixes(array); //it should be an array
  let longestPrefix;
  let arrayOfLengths = [];
  for (let i = 0; i < prefixes.length; i++) {
     arrayOfLengths.push(prefixes[i].length);
  }
  let maxLength = Math.max(...arrayOfLengths);
  let indexOfLogestWord = arrayOfLengths.indexOf(maxLength);
  longestPrefix = prefixes[indexOfLogestWord];
  console.log("longestPrefix", longestPrefix);
}

let example = [
  "Helloo Ellie",
  "I like cheese",
  "Helloo Daniel",
];

findLongestCommonPrefix(example);
