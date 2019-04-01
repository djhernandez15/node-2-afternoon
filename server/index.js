const express = require('express');
const messages_controller = require('./controllers/messages_controller')

const app = express();

app.use(express.json())

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, messages_controller.create);
app.get(messagesBaseUrl, messages_controller.read);
app.put(`${messagesBaseUrl}/:id`, messages_controller.update);
app.delete(`${messagesBaseUrl}/:id`, messages_controller.delete);



app.listen(3001, () => console.log('Hello'))