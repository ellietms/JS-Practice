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
function trackGames(windowSize,successRate,callback){

}