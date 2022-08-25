/* Ransom Note

- Given two parameters (ransomNote & magazine)
- if ransomNote can be constructed from magazine, return true
- each letter in magazine can only be used once in ransomeNote


- Can use hashmap to compare 
- Set to true
- Looop through magazine
    - Add the word and it's count to the map
- Loop through the note
    -Add word, if not already there and change the count to negative

*/

function canUseRansom(ransomNote, magazine) {
    const hashMapOfLetters = {};
    for(let i of magazine) { // loop through letters in magazine
        if(!hashMapOfLetters[i]) {
            hashMapOfLetters[i] = 0;
        }
        hashMapOfLetters[i]++;
    }
    for(let j of ransomNote) {
        if(!hashMapOfLetters[j]) {
            return false;
        }
        hashMapOfLetters[j]--;
    }
    return true;
}