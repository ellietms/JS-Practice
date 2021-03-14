function capitalizedWords (array) {
    let results = [];
    function helper(array){
        if(array.length !== 0){
            array[0] = array[0].toUpperCase();
            results.push(array[0]);
            helper(array.slice(1));
        }
    } 
    helper(array);
    return results;
}
  
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']