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


// improvement 3 :
// Let's talk about how many times you look at each word
// Added to your saved items
// And this is sometimes called "efficiency"
// Right now, I think you look at each word 5 times 
// it should be two times

function longestWordInArray(array) {
  let longestWord = [];
  for (let i = 0; i < array.length; i++) {
    let arrayOfWords = array[i].split(" ");
      if (longestWord.length === 0) {
        arrayOfWords.filter(word => {
          if(word.length === Math.max(...(arrayOfWords.map(x => x.length)))){
            longestWord.push(word)
          }
        }
        )
      } 
      else if (longestWord.length > 0) {
        let longestWordsOfThisArray = arrayOfWords.filter(word => word.length === Math.max(...(arrayOfWords.map(x => x.length)))); 
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
    console.log("LongestOnes", longestWord);
  }


longestWordInArray(example);
