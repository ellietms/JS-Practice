// I want you to write a function which returns an object, which behaves in a certain way.
// What the object is going to do is track how many times it's told you won and lost a game.
// So the object you return will have two methods on it: won() and lost()
// I want the function which makes the object to have three parameters: windowSize, successRate, and callback
// windowSize is a number which is how many recent games you should pay attention to.
// If windowSize is 5, you should only consider the 5 most recent games, you should ignore any older games.
// successRate is a number between 0 and 1. If, in the windowSize most recent games, you have lost too many,
//  you should call the function callback. So, for instance, if sucecssRate is 0.9 and windowSize is 5,
// if the last 5 games were all won, you shouldn't call callback,
//but if 4 were won  and 1 was lost (80%) you should call callback, because 80% is less than 0.9 (which is 90%).

// return object
// the object you return will have two methods on it: won() and lost();
// windowSize is a number which is how many recent games you should pay attention to.

// const loggingCallback = () => console.log("You lost too many games");
// const tracker = makeGameTacker(1, 0.9, loggingCallback());
// tracker.won();
// should not log anything, but then if you called tracker.lost(); it should log "You lost too many games"

// In fact, specifically:
// const loggingCallback = () => console.log("You lost too many games");
// const tracker = makeGameTacker(1, 0.9, loggingCallback());
// tracker.won();
// tracker.lost();
// should log nothing after the call to won() and then should log "You lost too many games" after the call to lost()

// I want for every time you call won or lost, for it to re-calculate the result based on your most recent games
const loggingCallback = () => console.log("You lost too many games");
let arrayResults = [];
let won = 0;
let lost = 0;
let gameRate = won / (won + lost)

 function call(x1,x2,x3,x4,windowSize,successRate,loggingCallback){
    if (arrayResults.length < windowSize) {
      x1 = x1 + 1;
    } 
    else if (arrayResults.length === windowSize)
     {
      if(arrayResults[0] === x4){
      x2 = x2 - 1;
      x1 = x1 + 1;
      }
      arrayResults.splice(0, 1);
    }
    arrayResults.push(x3);
    if (
      arrayResults.length === windowSize &&
      gameRate < successRate
    ) {
      loggingCallback();
    }
    console.log("A",arrayResults);
}



function makeGameTacker(windowSize, successRate, loggingCallback) {
  const results = {
    won: () => {
      call(won,lost,"won","lost",windowSize,successRate,loggingCallback);
    },
    lost: () => {
      call(lost,won,"lost","won",windowSize,successRate,loggingCallback);
    },
  }
  return results;
}

const tracker = makeGameTacker(4, 0.9, loggingCallback);
tracker.won();
tracker.lost();
tracker.won();
tracker.won();
tracker.won();
tracker.won();
tracker.lost();
