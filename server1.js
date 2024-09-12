import { log } from 'console'
import http from 'http'
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404

    // console.log(req.url);
    // console.log(req.method);


    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write("Hello world!")
    res.end()
})

server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);

})
