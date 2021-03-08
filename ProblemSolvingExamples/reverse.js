let words = "";
function reverse(string){
    if(string.length !== 0){
        let newWord;
        newWord = string[string.length - 1]; 
        string = string.slice(0,string.length - 1);
        words = words.concat(newWord);
        reverse(string);  
    }
    return words;
}




console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool'))