 //function
function greet(){
    console.log("hello coder army");
    console.log("mein badiya hun or aap kaise hai");
}
greet();
greet();

//parameter
function sum(num1,num2){
    console.log(num1+num2)
}
//arguments
sum(3,4);
sum(12,3);
function multiply(num1,num2){
    console.log(num1*num2)
}

let result = multiply(4,5)
console.log(result)

// function as variable
const fun = function(){
    console.log("hello coder")
}
fun()
//Arrow function
const fun1 =()=>{
console.log("hello bhai")
}
fun1()

const fun2 =(num1,num2)=> num1+num2;

console.log(fun2(2,3));

const sum1 =function(...number){
    console.log(number)
}
sum1(2,3,4);
