/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    banned = new Set(banned);
    paragraph = paragraph.toLowerCase().match(/\w+(?:'\w+)*/g).sort();

    console.log(paragraph);

    max = 0;
    index = 0;

    prev = "";
    count = 0;

    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == prev && !banned.has(paragraph[i])){
            count++;
        }
        if(paragraph[i] !== prev && !banned.has(paragraph[i])){
            prev = paragraph[i];
            count = 1;
        }
        if(count > max){
            max = count;
            index = i;
        }
    }

    return paragraph[index];
};