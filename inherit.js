let user1={
    name:"tarsem",
    age:20,
}

let user2={
    amount:34594,
    rollno:35434,
}

user2.__proto__=user1;
console.log(user2.name);