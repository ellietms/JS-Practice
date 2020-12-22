// Can you try to just write code which, for an array,
// will print out every pair of elements? So for your test array, will print out:
// "Helloo Ellie", "I like cheese"
// "Helloo Ellie", "Helloo Daniel"
// "I like cheese", "Helloo Daniel"


let example = ["Helloo Ellie", "I like cheese", "Helloo Daniel"];

function print(array){
    for(let i = 0 ; i < array.length ; i++){
      let removedItem =  array.splice(i,1);
      console.log(array);
      array.splice(i,0,removedItem[0]);
    }
}

print(example);