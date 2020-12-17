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

function findLongestWord(array) {
  let longestWords = [];
  let wholeWordsOfEachItem;
  let arrayOfLengths = [];
  let LongestWordOfEachItem;
  let indexOfLongestWord;
  let longestWordLength;
  for (let i = 0; i < array.length; i++) {
    wholeWordsOfEachItem = array[i].split(" ");
    for (let j = 0; j < wholeWordsOfEachItem.length; j++) {
        arrayOfLengths.push(wholeWordsOfEachItem[j].length);
        
      }
    longestWordLength = Math.max(arrayOfLengths);
    indexOfLongestWord = arrayOfLengths.indexOf(longestWordLength);
    LongestWordOfEachItem = wholeWordsOfEachItem[indexOfLongestWord];
    longestWords.push(LongestWordOfEachItem);
    console.log("LongestWordOfEachItem",LongestWordOfEachItem)
    console.log("longestWords",longestWords)
  }
  console.log("longestWords2",longestWords)
}

findLongestWord(example);
