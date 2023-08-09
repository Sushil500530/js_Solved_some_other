// let x = 8 & 1;
// console.log(x)

function string(str){
    if(typeof str !== 'string'){
        return "please provide a valid string!"
    }
    else{
        if(str > 0){
            str = str.replace(/^0+/, '');
            return /^[01]+$/.test(str);
        }
        else if(str > 0){
            str = str.replace(/^0+/, '');
            return /^\d+$/.test(str);
        }
        else{
            return false;
        }
    }
   
}
console.log(string('110101010010'))


//  convert decimal to binary 

function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
      return decimalNumber;
    }
  
    let binary = '';
    while (decimalNumber > 0) {
      binary = (decimalNumber % 2)   + binary;
      console.log(binary)
      decimalNumber = Math.floor(decimalNumber / 2);
    }
  
    return binary;
  }
  
  const decimalNumber = 50; // Replace with your decimal number
  const binaryNumber = decimalToBinary(decimalNumber);
  console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryNumber}`);

