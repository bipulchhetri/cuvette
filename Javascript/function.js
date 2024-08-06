
function sayMyName()
{
    console.log("Hi Bipul");
}
sayMyName();
function addtwonumber(number1,number2)
{
    console.log(number1+number2);

}
const result=addtwonumber(4,6);

//rest and spread operator
function calculatecartprice(...num1)
{
return  num1;
}
console.log(calculatecartprice(2,3,4));

const user={
    name:"bipul",
    salary:"100000"
}
function obj(anyobj)
{
    console.log(`username is ${anyobj.name}`)
}
obj(user)