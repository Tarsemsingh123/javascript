const obj={
    name:"tarsem",
    account_balance:23045,
    roll_no:"2207798",
    undefined:30,
}
//how to access the variable value
console.log(obj.name);
console.log(obj.gender);
// second method to access

console.log(obj["name"])
// when we are used this the we are give as string

//key store as string in backend
console.log(obj[undefined]);

// object create
const person=new Object();
person.name="rohit",
person.age=15,
person.gender="male",
person.balance=0,
console.log(person)
delete person.age;
console.log(person)



//third method for creation
class people{
    constructor(name,age ,gender){
this.name=name;
this.age=age;
this.gender=gender;
    }
}
let per1 =new people("tarsem",20,"male")
console.log(per1);



let obj1={
name:"rahul",
accoun_balance:"233434",
roll_no:23434343,
}

// it return a array and only give the key
const arr=Object.keys(obj1);
console.log(arr);

//it gives keys and value both in but also return an array
const arr1=Object.entries(obj1);
console.log(arr1);

// assign use case
let obj2={a:1,b:2};
let obj3={c:3,d:4};
//Object.assign(emptyobject,object1 object2)
let obj4=Object.assign({},obj2,obj3);
console.log(obj4,obj2)
//spread operator
const obj5={...obj2,...obj3}
console.log(obj5)
