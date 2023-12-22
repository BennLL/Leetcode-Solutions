/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    return s.indexOf('01') < 0
}

// The logic here is that if '01' is not found in the string s, it means there are no instances where 0 is immediately followed by 1, suggesting that there's at most one contiguous segment of ones. If the expression evaluates to true (i.e., s does not contain '01'), it implies that the string contains at most one segment of contiguous ones, fulfilling the condition of the problem. Hence, it returns true. If '01' is found, the expression returns false, indicating that the string contains more than one contiguous segment of ones.