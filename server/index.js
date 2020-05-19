const express = require('express')
const app = express()
const SERVER_PORT = 3001
const ctrl = require('./controllers/messages_controller')

app.use(express.json())

app.get('/api/messages', ctrl.getMessages)
app.put('/api/messages/:id', ctrl.updateMessage)
app.post('/api/messages', ctrl.createMessage)
app.delete('/api/messages/:id', ctrl.deleteMessage)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))