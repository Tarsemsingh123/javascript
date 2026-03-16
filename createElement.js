function attach(content){
const element=document.createElement('li');
element.innerHTML=content;

const element1=document.createElement('li');
element1.innerHTML=content+"v2.0";

const id=document.getElementById('root');
id.appendChild(element);
// in append we are give multiply thing
id.append(element,element1)}
attach("TS");
attach("React");
attach("Node");
const element2=document.createTextNode("hello coder army")
const parent=document.getElementById('root') 
parent.append(element2);

// attribute node
const element4=document.createAttribute("id");
element4.value="first";
const curr_list=document.querySelector('li');
curr_list.setAttribute(element4);


// access attribute of a element
// getAttribute
//remove attribute
// append node to dom
// ****************** node to the dom
// insertbefore
//prepend


