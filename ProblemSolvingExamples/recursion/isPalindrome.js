function reverse(string) {
    let words = "";
    function helper(string) {
      if (string.length !== 0) {
        let newWord;
        newWord = string[string.length - 1];
        string = string.slice(0, string.length - 1);
        words = words.concat(newWord);
        helper(string);
      }
    }
    helper(string);
    return words;
  }


function isPalindrome(string){
    let reverseString  = reverse(string);
    if(reverseString === string){
        return true;
    }
  return false;
}



console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
