const http = require('http')

const server = http.createServer((request, response) => {
    const {method, statusCode, url } = request
    const sports = ['soccer', 'volley', 'basketball', 'tennis']

    if (url === '/') {
         response.write('<div><h1> Hello from node</h1> <p>http server</p></div>')
         return;
      
    }

    if (url === '/api/sports') {
        response.write(JSON.stringify(sports))
        response.end()
    }

    response.statusCode = 404 
    response.write('<h1>Página não encontrada</h1>')
    response.end()
})

server.listen(3000, 'localhost', () => {
    console.log('server runnig on http://localhost:3000')
    
})