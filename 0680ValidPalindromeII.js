var validPalindrome = function(s) {
    size = s.length;
    s = s.split("");
    temp = [];
    temp2 = copyArray(s);

    for(i = 0; i < size; i++){
        console.log("original: " + s);
        tempchar = s[i];
        s.splice(i, 1);
        console.log("spliced: " + s);

        temp = copyArray(s);
        console.log("copied and reversed: " + temp);

        if(s == temp){
            return true;
        }

        s = copyArray(temp2);
        console.log("Added back: " + s);
        console.log();
    }

    return false;
};

var copyArray = function(arr){
    temp = [];

    for(i = 0; i < arr.length; i++){
        temp[i] = arr[i];
    }

    temp = temp.reverse();
    return temp;
}

s = "abc";
console.log("end: " + validPalindrome(s));

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false