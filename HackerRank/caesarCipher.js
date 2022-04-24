// shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
//  In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

{/* Example : 

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b

*/}

function caesarCipher(string, rotation){
    string = string.toLowerCase();
    let arrayString = string.split("");
    let newAscii;
    let newWord;
    let newString;
    for(let i = 0 ; i < string.length ; i++){
        if(string.charCodeAt(i) >= 97 &&  string.charCodeAt(i) <= 122){
            newAscii = string.charCodeAt(i) + rotation 
            if(newAscii > 122){
              let extra = newAscii - 122
              newAscii = 96 + extra
            }
            newWord = String.fromCharCode(newAscii)
            arrayString.splice(i, 1, newWord)
        }
        else{
            arrayString.splice(i, 1, string[i])

        }
    }

    newString = arrayString.join("")
    return newString

}

// caesarCipher("abcdefghijklmnopqrstuvwxyz", 2)
console.log(caesarCipher("abcdefghijk-lmnopqrstuvwxyz", 3))

// cdefghijklmnopqrstuvwxyzab

// cdefghijklmnopqrstuvwxyzab

