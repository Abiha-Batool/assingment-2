const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const fs=require ("fs")
const home = fs.readFileSync("home.html")
const about = fs.readFileSync("about.html")
const blog = fs.readFileSync("blog.html")
const services = fs.readFileSync("services.html")
const table2 = fs.readFileSync("table 2.html")

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url=="/" ){
      res.end(home)
  }
  else if (req.url=="/about"){
      res.end(about)
  }
  else if (req.url=="/blog"){
      res.end(blog)
  }
  else if (req.url=="/services"){
    res.end(services)
}
else if (req.url=="/table2"){
    res.end(table2)
}

  else{
      res.statusCode=404
      res.setHeader("content-type","text/plain")
      res.end(`Page not found`)
      
  }
});




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
