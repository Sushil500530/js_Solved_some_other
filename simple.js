// finding reverse number 
function findingBadData(arr){
    let badData =[];
    for(let number of arr){
        if(number < 0){
            badData ++;
        }
    }
    return badData;
}
const arrayNumber = [2, -5, -7, -13, 51, 20, -15, 20, -54, 59];
// console.log(findingBadData(arrayNumber))

/*
other problem solving trying other type
*/
function find(number){
    let bad  = [];
    for(let item of number){
        if(item < 0){
            console.log(item)
            bad++;
        }
    }
    return bad;
}
const n = [-5, 5, -8, -15, 20, -50, 55, -24];
console.log(find(n));


function integer(number){
    if(number % 1 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(integer(25))

function string(str){
    if(str.toLowerCase().endsWith('.js') === true){
        return true;
    }
    else{
        return false;
    }
}
console.log(string('index.jd'))



function math(m){
    if(typeof m !=='number' || m <= 0 ){
        return "massage of valid"
    }
    else{
        return (((m*3)+10) /2) -5;
    }
}
console.log(math(6))

 function biyok(number){
    const div = number -7;
    if(div < 7){
        return div
    }
    else if(div > 7){
        return number * 2
    }
    else{
        return "number is incorrect!"
    }
 }
 console.log(biyok(512))



 function friendsGerms(a,b,c){
    const frnd1 = 21;
    const frnd2 = 32;
    const frnd3 = 43;
    const toalal = (frnd1 * a) + (frnd2*b) + (frnd3*c);
    if(toalal > 2000){
        return toalal - 2000;
    }
    else{
        return toalal;
    }
 }
 console.log(friendsGerms(20,200,50))

 function nameCall(call){
    const name = call.name || "nai"
    const age = call.age || "nai"
    const email = call.email || "nai"
    const bou = call.bou || "nai"
    return 'amar nam '+ name + ". amar boyos "+ age+ '. amar email '+email+" . amar bou "+ bou + '!';
 }
 const person ={
    name:'sushil',
    age:20,
    email:'sushil@gmail.com',
    bou:'nai'
 }
 console.log(nameCall(person))
  

 if(photname.toLowerCase().endsWith(extainsion.toLowerCase())=== true){
    return true;
 }
 else{
    return false;
 }
  
 function recur(num){
    if(num === 1){
        return 1;
    }
    else{
        return num + recur(num - 1);
    }
 }
 console.log(recur(100))
 */
function prime(number){
    let primeN = [];
    for(let item of number){
        if(item > 1){
            let flag = true;
            for(i = 2; i < item; i++){
                if(item % i === 0){
                    flag = false;
                }
            }
            if(flag === true){
                primeN.push(item)
            }
        }
    }
    return primeN;
}
const array = [4, 8, 7, 5, 9, 12, 15, 17, 19, 52, 22];
console.log(prime(array))