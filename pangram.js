
function isItPangram(sentence) {
    const lowercaseSentence = sentence.toLowerCase();

    for(let letter = 'a'; letter <= 'z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
        //console.log(letter)
        if (lowercaseSentence.includes(letter)) {

        }else {
            return false
        }
    }
    return true
}

const sentence1 = "The quick brown fox jumps over the lazy dog!";
const sentence2 = "I like cats, but not mice";

console.log(isItPangram(sentence1)) //true
console.log(isItPangram(sentence2)) //false

//Space Complexity = O(1) Constant Space