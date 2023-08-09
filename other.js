const array = [];
function random(arr){
    let result = [];
    for(let i = 0; i < 25; i++){
        arr.push(Math.floor(Math.random() * 25) + -15);
        if(arr[i] > 0){
            result.push(arr[i]);
        }
        else{
            break;
        }
    }
    return result;
}
console.log(random(array))