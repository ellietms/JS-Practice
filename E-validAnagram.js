// given two strings s & t , write a function to determine if t is an anagram of s ?

function isAnagram (str1,str2){
    let arrayOfString1 = str1.split("");
    let arrayOfString2 = str2.split("");
    let count = 0;
    console.log("Str1",arrayOfString1);
    console.log("Str2",arrayOfString2);
    for(let i = 0 ; i < arrayOfString2.length ; i++){
        
    }
    if(arrayOfString1.length === arrayOfString2.length){
      for(let i=0;i < arrayOfString1.length;i++){
        console.log("newArrayOfString1",arrayOfString1);
        console.log("i",i);
        if(arrayOfString2.includes(arrayOfString1[i])){
            arrayOfString1.splice(i,1);
            console.log("NEW",arrayOfString1);
            i = i - 1;
            count = count + 1;
            console.log("count",count);
        }
        else{
            break;
        }
    }
    if(arrayOfString1.length === 0 && arrayOfString2.length === count){
        console.log("it is Anagram");
    }
    else{
        console.log("it is not Anagram");
    }
 }  
 else{
     console.log("it is not Anagram");
 }

}

isAnagram("aacc","ccac");
isAnagram("anagram","nagaram");
isAnagram("cat","rat");