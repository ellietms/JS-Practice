function capitalizeFirst (array) {
    let results = [];
    function helper(array){
   if(array.length !== 0){
      array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
      results.push(array[0]);
      helper(array.slice(1));
      }
    }
   helper(array);
   return results;
  }

  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  console.log(capitalizeFirst(['ellie','like','you']))