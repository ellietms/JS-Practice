// Valid Parentheses

function validParentheses(str){
    let stack = [];
    let arrayOfString = str.split("");
    for(let i = 0 ; i < arrayOfString.length ; i++){
        if(arrayOfString[i] === "(" || arrayOfString[i] === "{" || arrayOfString[i] === "["){
            stack.push(arrayOfString[i]);
        }
        else if(arrayOfString[i] === ")" && stack.length !== 0 && stack[stack.length - 1] === "(" ){
            stack.pop();
        }
        else if(arrayOfString[i] === "}" && stack.length !== 0 && stack[stack.length - 1] === "{"){
            stack.pop();
        }
        else if(arrayOfString[i] === "]" && stack.length !== 0 && stack[stack.length - 1] === "["){
            stack.pop();
        }
        else if(arrayOfString[i] === " " && stack.length !== 0 ){
            return (false);
        }
        else{
            return (false);
        }
    }
    if(stack.length === 0){
        return (true);
    }
}


 console.log(validParentheses("()"));
 console.log(validParentheses("(){}[]"));
 console.log(validParentheses("(}"));
 console.log(validParentheses("([)]"));
 console.log(validParentheses("{[]}"));
 console.log(validParentheses("[]{)"));
 console.log("---() section---")
 console.log(validParentheses("(())"));
 console.log(validParentheses("()"));
 console.log(validParentheses("()()"));
 console.log(validParentheses("()("));
 console.log(validParentheses("(()"));