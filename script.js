'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;
    if(birthYear > 1981 && birthYear <= 1996){
        const str = `Lucky Person,${firstName}`;
        console.log(str);
        function add(a,b){
            output = `MaMa MEe Yar`
            console.log(output);
            return a+b;
        }
        add(1,2);
    }
    const printAge = ()=>{
        const output = `${firstName} is ${age} years old and born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = "Sai Yan Naing";
calcAge(1990);

console.log(addDecl(2,3));

function addDecl(a,b){
    return a+b;
}

var allProduct = 0;
if(!allProduct)deleteShoppingCart();

function deleteShoppingCart(){
    console.log(`delete all products.`);
}