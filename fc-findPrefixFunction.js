const str = "Hellloo";
const str2 = "HEllie";
let prefix = [];

function FindPrefix(str, str2) {
  let lengthStr = str.length;
  let lengthStr2 = str2.length;
  str = str.toLowerCase();
  str2 = str2.toLowerCase();
  if (lengthStr > lengthStr2) {
    for (let i = 0;i<lengthStr2;i++) {
      if (str2.substring(0, i + 1).includes(str.substring(0, i + 1))) {
        prefix.push(str2.substring(0, i + 1));
      }
    }
    if (prefix.length === 1) {
      console.log("1", prefix[0]);
    } else if (prefix.length !== 0) {
      console.log(prefix[prefix.length - 1]);
    } else {
      console.log("Empty");
    }
  } else {
    for (let i = 0; i < lengthStr; i++) {
      if (str.substring(0, i + 1).includes(str2.substring(0, i + 1))) {
        prefix.push(str.substring(0, i + 1));
      }
    }
    if (prefix.length === 1) {
      console.log("1", prefix[0]);
    } else if (prefix.length !== 0) {
      console.log("2", prefix[prefix.length - 1]);
    } else {
      console.log("Empty");
    }
  }
}

FindPrefix(str, str2);
