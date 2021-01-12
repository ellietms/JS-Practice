function lazyMerger(arr) {
    let i = -1;
    return {
        next: () => {
            while (arr.length !== 0) {
                console.log("i  before",i);
                i = (i + 1) % arr.length;
                console.log(i,"i = (i + 1) % arr.length")
                console.log("i after",i);
                console.log("First Array",arr);
                while (arr.length !== 0 && arr[i].length === 0) {
                    arr.splice(i, 1);
                    console.log("deleted one",arr.splice(i,1))
                    console.log("array in while",arr);
                }
                if (arr.length === 0) {
                    return undefined;
                }
                console.log("array end of each loop",arr);
                console.log("---")
                console.log("i = ",i);
                console.log("---")
                console.log("arr[i] = ",arr[i])
                console.log("result of arr[i].splice(0, 1)",arr[i].splice(0, 1));
                console.log("+++++++++++++++++++++++++++++")
                return arr[i].splice(0, 1)[0];
            }
        }
    };
}

let example = [ 
    [1, 2, 3],
    [],
    ["a", "b", "c"],
    [6,7,8,9]
  ];

  const obj = lazyMerger(example);
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
 (obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
//   console.log(obj.next());
  