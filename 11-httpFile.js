const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to page')
    }
    if(req.url === '/about'){
        res.end('Here is a short history of our company')
    }else if(req.url !== '/' || req.url !=='/about'){
        res.end(`
    <h1>Ooops</h1>
    <p> We can't seem to find the page you are requaeting for</p>
    <a href="/">back home</a>
    `)
    }
    
})

const port = 5000
server.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
})