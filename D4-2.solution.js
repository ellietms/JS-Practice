let example = [ 
    [1, 2, 3],
    [],
    ["a", "b", "c"],
    [6,7,8,9]
  ];



function lazyMerger3(arr) {
    let i = 0;
    let j = 0;
    let element;
    return {
        next: () => {
            let checked = 0;
            while (checked < arr.length) {
                if (arr[i].length > j) {
                    const element = arr[i][j];
                    i = (i + 1) % arr.length;
                    if (i === 0) {
                        j++;
                    }
                    console.log("------------------------------------")
                    console.log("i = ",i);
                    console.log("j =",j);
                    console.log("element",element);
                    console.log("checked",checked);
                    console.log("-----------------------------------")
                    return element;
                } 
                else {
                    i = (i + 1) % arr.length;
                    if (i === 0) {
                        j++;
                    }
                    console.log("-----------IN ELSE---------")
                    console.log("element",element);
                    console.log("checked",checked);
                    console.log("-------Else Finished-------")
                }
                checked++;
            }
            return undefined;
        }
    };
}
const obj = lazyMerger3(example);
(obj.next());
(obj.next());
(obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// (obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());