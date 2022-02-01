// let number = 1;
// for(let i = 1; i <= 5; i++){
//     number = number * i;
//     console.log(number, i)
// }


// let factroial = 1;
// for(let i = 1; i <= 8; i++){
//     factroial = factroial * i;
//     console.log('is fact Roial number', factroial);
// }

// let factroials = 1;
// let i = 1;
// while(i <= 5){
//     factroials = factroials * i;
//     console.log(factroials);
//     i++;
// }

function isFactroial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
const isNumber = isFactroial(5);
console.log(isNumber)

function factroal(number){
    let numbers = 1;
    let i = 1;
    while(i <= number){
        numbers = numbers * i;
        i++;
    }
    return numbers;
}
let secondFactroile = factroal(5);
console.log('Second factroile of 5 is -', secondFactroile);