function buy(cb1,cb2)
{
    setTimeout(()=>
    {
        console.log("buy a car");
        cb1(cb2);
    },1000);
}
function plan(cb2)
{
    setTimeout(()=>
    {
        console.log("plan a trip");
        cb2();
    },2000);
}
function reach()
{
    setTimeout(()=>
    {
        console.log("reached manali");
        
    },3000);
    }
    buy(plan,reach);
