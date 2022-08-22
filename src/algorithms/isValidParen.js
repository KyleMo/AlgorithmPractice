const isValidParen = (s) => {
    let stack = [];

    for (let i=0;i<s.length;i++){
        // if its a left bracket we push to the queue
        // if its a right bracket, we pop from the queu
        // if we are left with anything in the queuer we will return false

        if (s[i] === '{' || s[i] === '[' || s[i]==='('){
            stack.push(s[i])
        } else if (i==0 && (s[i] === '}' || s[i] === ')' || s[i]===']')){
            return false
        } else {
            if(isClosingBracket(s[i],stack[stack.length-1])){
                stack.pop()
            }
        }

    }
    return stack.length === 0
}

const isClosingBracket = (string, target) => {
    switch(target){
        case '{':
            if(string === '}'){
                return true
            }
            return false
        case '[':
            if(string === ']'){
                return true
            }
            return false
        case '(':
            if(string === ')'){
                return true
            }
            return false
        default:
            return false
    }
}


export default isValidParen