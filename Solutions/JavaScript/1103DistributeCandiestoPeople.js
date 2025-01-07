/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    peep = new Array(num_people).fill(0);
    count = 1;
    i = 0;
    while(candies > 0){
        if(candies - count > 0){
            peep[i] += count;
            candies -= count;
            count++;
            i++;
        }else{
            peep[i] += candies;
            break;
        }
        if(i == num_people){i = 0}
    }

    return peep;
};