import { log } from 'console'
import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT

//get current path

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname, __filename);



const server = http.createServer(async (req, res) => {

    try {
        // check if get request 
        if (req.method === "GET") {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html')
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html')

            } else {
                throw new Error('Method not Found')
            }

            const data = await fs.readFile(filePath)

            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()

        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'content-type': "text/html" })
        res.end('<h1>ServerError</h1>')
    }

})

server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);

})