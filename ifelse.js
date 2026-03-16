let age =30;
if(age>=18){
    console.log("eligible for vote")
}
else{
    console.log("not eligible for vote");
}

//if else if else
    let age1 =19;
if(age<18){
    console.log("KID");
}
else if(age>45){
    console.log("old")
}
else{
console.log("young");
}


// Mulitple conditions :switch
switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;

    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("friday");
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    default:
    console.log("not valid day");

}
//for loop
for(let i=0;i<20;i++){
    // console.log("hello coder army");
    console.log(i)
}
//sum of first n:10  natural number\
sum=0;
for(let i=0;i<=10;i++){
    sum+=i;
    

}
console.log(sum)
// scope of variable
// Global scope ,local scope block scope
// let a=10;
// let b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);


