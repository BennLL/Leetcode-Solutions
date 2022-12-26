/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(x = 0; x < image.length; x++){
        index = 0;
        image[x].reverse();
        while(image[x][index] != null){
            if(image[x][index] == 0){
                image[x][index] = 1;
            }else{
                image[x][index] = 0;
            }
            index++;
        }
    }
    
    return image;
};

image = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
console.log(flipAndInvertImage(image))