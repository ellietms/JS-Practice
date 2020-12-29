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

let example2 = [
  "He's in a boy band which doesn't make much sense for a snake",
  "My Mum tries to be cool by saying that she likes all the same things that I do",
  "Greetings from the galaxy MACS0647-JD, or what we call home",
]




// improvement 1 :
//You’re currently storing an array of one element per string in the original array.
//Can you solve the problem without having to store so many things?

// improvement 2 :
// Next challenge: When you do array.join(" ") you make one really long string,
//  and then you immediately undo that. Can you work out how to solve the problem without doing that?

//  improvement 3:
// It looks like you have the same code twice - 
// the if (longestWordsOfThisArray.length !== 1) branch looks like it contains all of the code from the outer if/else chain - what's up with that?


// improvement 4 :
// Let's talk about how many times you look at each word
// Added to your saved items
// And this is sometimes called "efficiency"
// Right now, I think you look at each word 5 times 
// it should be two times

// I think you need the first one (for splitting), 
// and the last one (deciding if it should go in longestWord), and you don't need any in the middle

// You need to look at the words twice. Once to find the words (the split), 
// and once in a loop, where you decide for each word whether it's the longest you've seen so far.
function longestWordInArray(array) {
  let longestWord = [];
  for (let i = 0; i < array.length; i++) {
    let arrayOfWords = array[i].split(" "); //done
    for(let i = 0 ; i < arrayOfWords.length ; i++){
      if(longestWord.length === 0){
        longestWord.push(arrayOfWords[i])
      }
      else if(longestWord.length > 0){
            if (
                longestWord[longestWord.length - 1].length <
                arrayOfWords[i].length
              ) {
                longestWord = [];
                longestWord.push(arrayOfWords[i]);
              } else if (
                longestWord[longestWord.length - 1].length ===
                arrayOfWords[i].length
              ) {
                longestWord.push(arrayOfWords[i]);
              }
      }
    }
    }
    console.log("LongestOnes", longestWord);
  }


longestWordInArray(example);
longestWordInArray(example2);