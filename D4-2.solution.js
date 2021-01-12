// Doesn't modify the inner arrays, but does modify the outer array:

let example = [ 
    [1, 2, 3],
    [],
    ["a", "b", "c"],
    [6,7,8,9]
  ];

  function lazyMerger2(arr) {
    let i = 0;
    let j = 0;
    return {
        next: () => {
            while (arr.length !== 0) {
                console.log("array",arr);
                console.log("i = ",i);
                console.log("j =" , j);
                if (arr[i].length > j) {
                    const element = arr[i][j];
                    i = (i + 1) % arr.length;
                    if (i === 0) {
                        j++;
                    }
                    return element;
                } else {
                    arr.splice(i, 1);
                    if (i === arr.length) {
                        i = 0;
                        j++;
                    }
                }
            }
            return undefined;
        }
    };
}


const obj = lazyMerger2(example);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());