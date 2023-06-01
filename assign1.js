let http = require('http');
const server=http.createServer((req,res)=>
{
  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>MY NODE JS</title></head>');
res.write('<body><h1>WELCOME HOME</h1></body>');
res.write('</html>');
res.end();
server.listen(4000/home);
});
// When url = /home , return response ==> Welcome home
// When url = /about, return response ==> Welcome to About Us page
// When url =/node, return response ==> Welcome to my Node Js project
