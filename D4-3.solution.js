// Doesn't modify any arrays, just counts:
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
                console.log("i",i);
                console.log("j",j);
                if (arr[i].length > j) {
                    const element = arr[i][j];
                    i = (i + 1) % arr.length;
                    if (i === 0) {
                        j++;
                    }
                    return element;
                } else {
                    i = (i + 1) % arr.length;
                    if (i === 0) {
                        j++;
                    }
                }
                checked++;
                console.log("checked",checked);
                console.log("element",element);
            }
            return undefined;
        }
    };
}
const obj = lazyMerger3(example);
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