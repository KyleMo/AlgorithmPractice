
// I can also sort this and compare that way becasue if they're anagram, after being sorted they should
// be exacrtly the same string
const isAnagram = (s, t) => {
    if (s.length !== t.length){
        return false
    }
    
    let sletters = {}
    let pletters = {}
    
    for (let i=0;i<s.length;i++){
        
        if (!sletters[s[i]]){
            sletters = {
                ...sletters,
                [s[i]]: 1
            }
        } else {
            let count = sletters[s[i]]
            sletters = {
                ...sletters,
                [s[i]]: count + 1
            }
        }

        if (!pletters[t[i]]){
            pletters = {
                ...pletters,
                [t[i]]: 1 
            }
        } else {
            let count = pletters[t[i]]
            pletters = {
                ...pletters,
                [t[i]]: count + 1
            }
        }
    }

    for (let i=0;i<s.length;i++){
        if(sletters[s[i]] !== pletters[s[i]]){
            return false
        }
    }

    return true

}

export default isAnagram;