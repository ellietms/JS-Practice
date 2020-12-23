// have two string , can you find the 

// function isFun (string1,string2){
//     let minLength = Math.min(string1.length,string2.length);
//     let firstCommonLetter = string1.split("").find(letter => letter === string2.charAt(0));
//     let startIndex  = Math.min(string1.indexOf(firstCommonLetter),string2.indexOf(firstCommonLetter));
//     let anagram = ""
//     for(let i = 0 ; i < minLength ; i++){
//         if(string1[string1.indexOf(firstCommonLetter)] === string2[string2.indexOf(firstCommonLetter)]){
//             anagram = anagram.concat(string2[i])
//         }
//         else{
//             break;
//         }
//     }
//     if(anagram){
//         console.log(anagram)
//         console.log(true)
//     }
//     else{
//     console.log(false);
//     }
// }
       

// isFun("anagram","nagaram");
// isFun("rat","car");
// isFun("home","mom");