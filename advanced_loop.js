let obj={
    name:"rohan",
    age:23,
    gender:"male",
    city:"kolkata",
};
//for in loop it iterate in key i can iterate over keys
for(let key in obj){
    console.log(key,obj[key])
}

//Object.keys(obj);
console.log(Object.keys(obj))
// it create the prototype of this object and inherit the properties
let obj2=Object.create(obj)
obj2.money=420;
obj2.id="Roh";
console.log(obj2.name)
// Object.keys cannot print inherit key 
console.log(Object.keys(obj2))
//for in loop print inherit key
for(let key in obj2){
    console.log(key)
}

let user ={
    name:"rohit",
    age:30,

}
Object.defineProperty(user,'name',{
    writable:false,
})
console.log(Object.getOwnPropertyDescriptor(user,"name"))


//for of loop
const arr =[10,20,30,40,50,11,18];
for(let value of arr){
    console.log(value);
}


let str ="Rohit is Good Boy";
for(let value of str){
    console.log(value)
}

// dont use for of loop in object
// const obj3={
//     name:"chavi",
//     age:20,
//     account_balance:23,


// }
// for(let value of obj3){
//     console.log(value)
// }

//error give because object are not iterable


// callback function those function which function passes as argument function is called callback function
function names(fun){
    console.log("hello I am name")
    fun();
}

function greet(){
    console.log("hello I am callback function")
}
names(greet);

names(()=>{
    console.log("i am call Back function");
});



// function fetchData(){
//     console.log(" i am fetching data");
// }
// setInterval(fetchData,5000);

// forEach loop
let arr1 =[10,20,30,40,50,60]
arr1.forEach(function(num,index){
    console.log(num,index)
});
// if give as argument first element is number
// second number is index
//third number is array



//filter
let arr3=[10,11,21,30,41,52];
const result=arr3.filter((num)=>{
    return num%2==0 
})
console.log(result)

const students=[
    {name:"rohan",age:22,marks:70},
     {name:"mohan",age:23,marks:80},
      {name:"Darshan",age:21,marks:77},
       {name:"rohan",age:22,marks:56},
        {name:"rohan",age:22,marks:32},
]
const result1=students.filter((obj)=>{
   return obj.marks>50
})
console.log(result1)


//map // it return the array

const arr4=[1,2,3,4,5]
const result2=arr.map((num)=>{
    return num+num
});
console.log(result2);

//reduce result create kr deta hai
//  const result=arr.reduce(callbackfunction ,initialization)
const arr5=[1,2,3,4,5]
const result3=arr.reduce((acc,curr)=>{
  acc=acc+curr ;
  return acc;
},0);
console.log(result3);