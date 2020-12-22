//  how can you compare all of the elements to find the longest common prefix of any two?

let example = [
    "Helloo Ellie",
    "I like cheese",
    "Helloo Daniel",
  ];

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
      if (commonPrefixes.length === 0) {
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
           else{
               j = item.length;
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
            else{
                j = item.length;
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
  let prefixes = findCommonPrefixes(array); 
  let longestPrefix = prefixes.sort((a,b) => b.length - a.length);
  console.log("longestPrefix", longestPrefix[0]);
}


findLongestCommonPrefix(example);
