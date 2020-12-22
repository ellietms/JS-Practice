// Like “How can I find the longest word in an array of sentences”

let example = [
  "The Japanese yen for commerce is still well-known",
  "Everybody should read Chaucer to improve their everyday vocabulary",
  "It took him a month to finish the meal",
  "As he waited for the shower to warm, he noticed that he could hear water change temperature",
  "He's in a boy band which doesn't make much sense for a snake",
  "The light in his life was actually a fire burning all around him",
  "Courage and stupidity were all he had",
  "My Mum tries to be cool by saying that she likes all the same things that I do",
  "Greetings from the galaxy MACS0647-JD, or what we call home",
];



// improvement : 
// You’re currently storing an array of one element per string in the original array.
//  Can you solve the problem without having to store so many things? 


// improvement 2 : 
// Next challenge: When you do array.join(" ") you make one really long string,
//  and then you immediately undo that. Can you work out how to solve the problem without doing that?

function longestWordInArray(array){
   let longestWords = "";
  array.map(eachString => eachString.split(" ").sort((a,b) => b.length - a.length)[0].length > longestWords.length ? longestWords = eachString.split(" ").sort((a,b) => b.length - a.length)[0] : longestWords = longestWords);
  console.log("Longest Word in the array is : " , longestWords)
}

longestWordInArray(example)
