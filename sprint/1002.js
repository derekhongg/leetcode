/* 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence */


function isPrefixOfWord(sentence, searchWord) {
    let sentenceSplit = sentence.split(" ");
    for(let i = 0; i < sentenceSplit.length; i++) {
        if(sentenceSplit[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
}