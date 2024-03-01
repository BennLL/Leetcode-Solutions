/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    s = 0;
    e = height.length - 1;
    ans = 0;
    while (s <= e) {
        if (height[s] < height[e]) {
            temp = height[s] * (e - s);
            s++;
        } else if (height[s] > height[e]) {
            temp = height[e] * (e - s);
            e--;
        } else {
            temp = height[e] * (e - s);
            s++;
        }
        ans = Math.max(temp, ans);
    }

    return ans;
};