let example = [ 
    [1, 2, 3],
    [],
    ["a", "b", "c"],
    [6,7,8,9]
  ];

function lazyMerger(arr) {
    let i = -1;
    return {
        next: () => {
            while (arr.length !== 0) {
                i = (i + 1) % arr.length;
                while (arr.length !== 0 && arr[i].length === 0) {
                    arr.splice(i, 1);
                }
                if (arr.length === 0) {
                    return undefined;
                }
                console.log("array end of each loop",arr);
                return arr[i].splice(0, 1)[0];
            }
        }
    };
}



  const obj = lazyMerger(example);
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
  