// function oddNumber(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     else{ 
//     return false;
//     }
// }
// const number = 2641;
// const isOddNumber = oddNumber(number);
// console.log(isOddNumber);

// const numbers = 2640;
// const isOddNumbers = oddNumber(numbers);
// console.log('odd number is right -', isOddNumbers);

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}
const oddNumber = 200;
const isEvenNumber = isOdd(oddNumber);
console.log('sotti -', isEvenNumber); 

const oddNumbers = 201;
const isEvenNumbers = isOdd(oddNumbers);
console.log('mitha-', isEvenNumbers); 