
// go throgh each item in string
// count the number of opening parens, add to dict
// count the number 



const isValid = (string) => {
    let stack = []

    for (let i=0; i<string.length; i++){

        if (isOpeningParen(string[i])){
            stack.push(string[i])
            console.log(stack)
        } 

        if (isClosingParen(string[i])){
            if(isSameType(stack[stack.length-1], string[i])){
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0 


}

const isSameType = (stackTop, endingParenType) => {
    if (stackTop === '(' && endingParenType === ')'){
        return true
    }
    else if (stackTop === '{' && endingParenType === '}'){
        return true
    }
    else if (stackTop === '[' && endingParenType === ']'){
        return true
    }
    else {
        return false
    }
}


const isClosingParen = (string) => {
    if (string === ')' || string === '}' || string === ']'){
        return true
    }

    return false
}

const isOpeningParen = (string) => {
    if (string === '(' || string === '{' || string === '['){
        return true
    }

    return false
}

export default isValid


