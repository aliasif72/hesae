    let posts=[
        {user:'asif',time:'22 may'},
        {user:'ali',time:'23 may' }];
    
    function createPosts(user)
    {
        return new Promise((resolve,reject)=>
        {
        setTimeout(()=>{
            posts.push(user);
            resolve();//resolve(user)
        },1000)
        })//.then(updateTime);
    }

    function getPosts()
    {
            setTimeout(()=>{
        let output='';
        posts.forEach((us,index)=>
            {
                output+=`<li>${us.time}</li>`;
            });
            document.body.innerHTML=output;
        },1000)
        }

    function updateTime()
            {
        return new Promise((resolve,reject)=>
        {
                setTimeout(()=>
                {
                    posts.time=new Date().getTime();
                resolve(posts.time);
            },1000)
        })
    }
    Promise.all([createPosts({user:'asli',time:'24 may'}),updateTime()]).then(value=>console.log(value));
