var validPalindrome = function(s) {
    s = s.split("");
    temp = s.slice();

    for(s = 0; x = s.length; s++){
        tempchar = s[i];

        s.splice(i, 1);
        temp.slice(i, 1);
        temp.reverse();

        if(s == temp){
            return true;
        }else{
            temp.reverse();
            s.splice(i,0,tempchar);
            temp.splice(i,0,tempchar);
        }
    }

    return false;
};


s = "aba";
console.log(validPalindrome(s));

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