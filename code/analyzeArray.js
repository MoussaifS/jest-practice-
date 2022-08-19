


function analyze (arr){

    let max = 1 ;
    let min = 1 ;
    let avg = 0 ;
    let len = arr.length
    for (let i = 0; i < len; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
        avg += arr[i]
    }

    return {
        min : min,
        max : max,
        avg : avg/len,
        length : len
    }
}

module.exports = analyze