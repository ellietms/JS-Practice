function splitTheBill(x) {
    let total = 0;
    let count = 0;
    let average;
    for(let val of Object.keys(x)){
      total += x[val];
      count++;
    }
    console.log(total);
    average = total/count;
    for(let val of Object.keys(x)){
      x[val] =Math.round ((x[val] -  average) * 100 ) /100 ;
    }
    return (x);
}    
     
  
    let obj = {a : 10 , b:30 , c:50}
    splitTheBill(obj);
//   for( let val of  obj){
//       console.log(val);
//   }