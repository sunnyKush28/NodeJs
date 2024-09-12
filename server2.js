import { createServer } from 'http'
const PORT = process.env.PORT
const users = [
    { id: 1, name: 'jone' },
    { id: 2, name: 'jone' },
    { id: 3, name: 'jone' },
    { id: 4, name: 'jone' }
]

// middleware

const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next()
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

// route handler 
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

const getUserByIdHandler = () => {

}

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(users))
            res.end()
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            const id = req.url.split('/')[3]


            const user = users.find((user) => user.id === parseInt(id))
            res.setHeader('Content-Type', 'application/json')
            if (user) {

                res.write(JSON.stringify(user))

            } else {

                res.write(JSON.stringify({ message: 'User not Found' }))

            }
            res.end()

        }

        else {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 404

            res.write(JSON.stringify({ message: 'Route note found' }))
            res.end()
        }
    })

})

server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);

})