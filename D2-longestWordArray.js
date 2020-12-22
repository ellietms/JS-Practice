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
function longestWordInArray(array){
  let soretedArray = array.join(" ").split(" ").sort((a,b) => b.length - a.length);
  console.log("Longest Word in the array is : " , soretedArray[0])
}

longestWordInArray(example)
