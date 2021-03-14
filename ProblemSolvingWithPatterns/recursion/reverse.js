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

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool"));
