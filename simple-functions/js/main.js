//---Easy
//create a function that subtracts two numbers and alerts the difference
// function sub(n1,n2) {
//     let difference = n1 - n2;
//    alert(`difference is:  ${difference}`);
// }
// sub(10,5)

// create a function that divides three numbers and console logs the quotient
// function div(n1, n2, n3 ) {
//     const quotient = n1 / n2 % n3 ;
//     console.log(`the quotient is: ${quotient}`);
// }
// div(50,10,3)

//create a function that multiplys three numbers and returns the product
// function multiply(n1,n2,n3) {
//      let product = n1 * n2 * n3;
//      return product;


// }
// multiply(5,10,3);


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
// function take(n1,n2,n3) {
// let sum = n1 + n2;
// let remainder = sum % n3
//     return remainder;
//     // console.log(remainder);

// }
// take(3,3,2)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function k(n1,n2,n3,n4) {
    let mult = n1 * n2;
    if (mult > 100) {
        let addition = n3 + n4;
        console.log(addition); 
    }else if(mult < 100){
      let sub = n3 - n4;
      console.log(sub);
    }else {
      let multi = n1 * n2 * n3;
      alert(multi % n4);
    }
    
    
}
k(50,2,4,2)