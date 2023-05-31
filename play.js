const print=(a,b) => a*b;
console.log(print(2,3));


const stud=
{
    name:'asif',
    age:26,
    greet:()=>
    {
        console.log('Hi, I am ' + this.name)
    }
}
stud.greet();

const stud1=
{
    name:'asif',
    age:26,
    greet:function()
    {
        console.log('Hi, I am ' + this.name)
    }
}
stud1.greet();