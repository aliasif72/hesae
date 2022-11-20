var obj=
{
    name:'asif',
    age:26
};   
localStorage.setItem('obj',JSON.stringify(obj));
 var stringy=localStorage.getItem('obj'); 
 console.log(JSON.parse(stringy));