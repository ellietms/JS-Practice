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
//You’re currently storing an array of one element per string in the original array.
//Can you solve the problem without having to store so many things?

// improvement 2 :
// Next challenge: When you do array.join(" ") you make one really long string,
//  and then you immediately undo that. Can you work out how to solve the problem without doing that?

function longestWordInArray(array) {
  let longestWord = [];
  for (let i = 0; i < array.length; i++) {
    let arrayOfWords = array[i].split(" ");
    let arrayOflengths = arrayOfWords.map((word) => word.length);
    let maxLength = Math.max(...arrayOflengths);
    let longestWordsOfThisArray = arrayOfWords.filter(
      (word) => word.length === maxLength
    );
    if (longestWordsOfThisArray.length === 1 && longestWord.length === 0) {
      longestWord.push(longestWordsOfThisArray[0]);
    } else if (
      longestWordsOfThisArray.length === 1 &&
      longestWord[longestWord.length - 1].length <
        longestWordsOfThisArray[0].length
    ) {
      longestWord = [];
      longestWord.push(longestWordsOfThisArray[0]);
    } else if (
      longestWordsOfThisArray.length === 1 &&
      longestWord[longestWord.length - 1].length >
        longestWordsOfThisArray[0].length
    ) {
      longestWord = longestWord;
    } else if (longestWordsOfThisArray.length !== 1) {
      let lengthsOfLongestWords = longestWordsOfThisArray.map(
        (word) => word.length
      );
      let maxLength = Math.max(...lengthsOfLongestWords);
      longestWordsOfThisArray.filter((word) => word.length === maxLength);
      if (longestWord.length === 0) {
        longestWordsOfThisArray.map((word) => longestWord.push(word));
      } else if (longestWord.length !== 0) {
        for (let i = 0; i < longestWordsOfThisArray.length; i++) {
          if (
            longestWord[longestWord.length - 1].length >
            longestWordsOfThisArray[i].length
          ) {
            longestWord = longestWord;
          } else if (
            longestWord[longestWord.length - 1].length <
            longestWordsOfThisArray[i].length
          ) {
            longestWord = [];
            longestWord.push(longestWordsOfThisArray[i]);
          } else if (
            longestWord[longestWord.length - 1].length ===
            longestWordsOfThisArray[i].length
          ) {
            longestWord.push(longestWordsOfThisArray[i]);
          }
        }
      }
    }

    console.log(arrayOfWords);
    console.log("LongestOnes", longestWord);
  }
}

longestWordInArray(example);
