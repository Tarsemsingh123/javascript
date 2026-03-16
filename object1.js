// shalow copy

let obj1={
    a:1,
    b:2
}
let obj2 =obj1;
// it store reference of object both are point one reference 
obj2.a=10;
console.log(obj2,obj1);

//deep copy
let obj3 =structuredClone(obj1);
obj3.a=15
console.log(obj3,obj2);


//Nested object
const obj ={
    name:"rohit",
    bank_balance:420,
    address:{
        pincode:234545,
        city:"kotdwar",
    }
}
// assign if we are used with nested object then its create a shallow copy
//assign if we are used without nested then it is act like a deepcopy
const user=Object.assign({},obj)
console.log(obj.address.pincode);
console.log(user);


// Destructuring of an object
let harsh ={
    name:"rahul",
    money:430,
    balance:435,
    rollno:344343,
}
//first method
//rest operator
const {name,money,...harsh1}=harsh;
console.log(name,money)
console.log(harsh1)

// destructuring with array
const arr =[3,2,1,5,10];
const [first,second,...arr1]=arr;
console.log(first,second)
console.log(arr1);

// destructuring in nested object
let ob={
    name:"tarsem",
    age:22,
    address:{
        pincode:2343433,
        city:"banglore",
    }
}

const {address:{pincode}}=ob;
console.log(pincode)



//prototype
//const arr=[10,20,30]
//arr.__proto__