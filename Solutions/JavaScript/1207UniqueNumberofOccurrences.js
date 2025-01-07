var uniqueOccurrences = function(arr) {
    set = new Set();
    arr = arr.sort(function(a,b){return a - b;});
    console.log(arr)
    temp = arr[0];
    count = 0;
    for(i = 0; i < arr.length + 1; i++){
        // console.log(set, "temp:", temp, "   count: ", count, "  arr[i]:", arr[i])
        if(arr[i] == temp){
            count++;
        }
        if(arr[i] != temp){
            if(set.has(count)){
                return false;
            }
            set.add(count);
            console.log(set)
            temp = arr[i]
            count = 1;
        }
    }
    return true;
};
// can be faster 