function celciusTOFaraenheit(celcius){
    let faranenhrit = celcius * 9/5 + 32;
    return faranenhrit;
}

let myCelius = 3;
let faranenhrit = celciusTOFaraenheit(myCelius);
console.log('my Celcius =', faranenhrit);

let myMotherCelcius = 7;
let faranenhrits = celciusTOFaraenheit(myMotherCelcius);
console.log('my Mother Celcius =', faranenhrits);

let myFatherCelcius = 10;
let faranenhritsr = celciusTOFaraenheit(myFatherCelcius);
console.log('my Madher Celcius =', faranenhritsr);



function faranenhritsrIs(farens){
    let celcius = farens * 5/9;
    return celcius;
}

// let myFaranenhritsr = 50 - 32;
// // let celcius = faranenhtsrIs(myFaranenhritsr);
// // console.log('my fareanenhrit = ', celcius);

// let isFaranenhritsr = 39.2 - 32;
// // let celcius = faranenhritsrIs(isFaranenhritsr);
// console.log('is fareanenhrit = ', faranenhritsrIs());