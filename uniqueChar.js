function hasUniqueChars(word){
for(let i = 0; i < word.length; i++) {
    for(let j = i+1; j < word.length; j++) {
        if(word[i] === word[j]){
            return false
        }
    }
}
return true
}

console.log(hasUniqueChars("woo")) //false
console.log(hasUniqueChars("wonder")) //true

//Space Complexity = O(n) Linear Space