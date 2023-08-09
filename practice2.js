
const shopingCard = [
    { name: 'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 2200, quantity: 5},
    { name: 'pant', price: 2500, quantity: 4},
    { name: 'belt', price: 600, quantity:3}
];
function totalCost(products){
    let totalSum = 0;
    for(let item of products){
        // console.log(item)
        const totalPhonePrice = item.price * item.quantity;
        totalSum = totalSum + totalPhonePrice;
    }
    return totalSum;
}
const sumOfCard = totalCost(shopingCard);
console.log('Total Phone Price is :', sumOfCard, 'TK');

   function removeDupl(name){
    const unicName = [];
    for(let allName of name){
        if(unicName.includes(allName) == false){
            unicName.push(allName)
        }
    }
    return unicName;
   }
   const NamesArray = [ 'abul', 'kabul','babul','gabul', 'mobul','mabul','ebul','abul','mobul', 'kabul', 'abul', 'mobul','abul'];
   const removalName = removeDupl(NamesArray);
   console.log(removalName);


   function bestFriend(friend){
    let bestu = [];
    for(let bro of friend){
        if(bro.length > bestu.length){
            bestu = bro;
        }
    }
    return bestu;
   }
   const friends = ['sajid', 'mamun', 'kamal', 'jubauer bin rased', 'chanku','sushil','proshanta','shamim'];
   console.log(bestFriend(friends));
  

   function reverse(numb){
    let re = 0;
    for(let number of numb){
        // console.log(number)
        if(number < 0){
            break;
        }
        // console.log(number)
    }
    return re;
   }
   const numbers1 = [45, 87, 96, 11, 63, -56, 71, 28];
   console.log(reverse(numbers1));

   // akti array er  moddhe onek gulo songkha thakle tar moddhe negetive number pele break hoye jabe

function removeReverse(numbers){
    for(let reverse of numbers){
        // console.log(reverse)
        if(reverse < 0){
            break;
        }
        console.log(reverse)
    }
}
const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
removeReverse(number);

