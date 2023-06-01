let http = require('http');
const server=http.createServer((req,res)=>
{
    const url=req.url;
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>MY NODE JS</title></head>');
      if(url==='/home')
    {
 res.write('<body><h1>WELCOME HOME</h1></body>');
    }
    else if(url==='/about')
    {
        res.write('<body><h1>WELCOME to about us page</h1></body>');
    }
    else if(url==='/node')
    {
        res.write('<body><h1>WELCOME to my NODE js project</h1></body>');
    }
res.write('</html>');
return res.end();
});


server.listen(4000);
