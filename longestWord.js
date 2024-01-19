const wordsArray = ['love', 'like', 'beautiful', 'gorgeous']
const wordsArray2 = ['long', 'short', 'enormous', 'humongous']

function  findLongestWord(array){
    let longestSofar = '';
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestSofar.length) {
            //console.log(array[i].length)
            longestSofar = array[i];
        }
    }
    return longestSofar;
}

console.log(findLongestWord(wordsArray))
console.log(findLongestWord(wordsArray2))

//Space Complexity = O(1) Constant Space