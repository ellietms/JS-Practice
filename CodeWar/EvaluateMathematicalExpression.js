

function ellie (expression) { 
    let obj = expression.split("");
    let total;
    console.log(obj);
    for(let i = 0 ; i < obj.length ; i++){
        if(!(isNaN(obj[i]))){
         console.log("NO", obj[i])
      }
    }
  };
  ellie("1+1-2+7");