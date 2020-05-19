
let array = []
let messageId = 0

module.exports = {

  getMessages: (req, res) => {
    res.status(200).send(array)
  },

  createMessage: (req, res) => {
    const {text, time} = req.body
    const message = {messageId, text, time}
    messageId++
    array.push(message)
    res.status(200).send(array)
  },

  updateMessage: (req, res) => {
    const {text} = req.body;
    const updateId = req.params.id;
    const index = array.findIndex(element => element.messageId == updateId);
  console.log(index)
    if(index === -1){
      return res.status(404).send('Message not found')
    }
    let newMessage = {messageId: +updateId, text: text, time: array[index].time}

    array[index] = newMessage
  
    res.status(200).send(array);
  },
  
  deleteMessage: (req, res) => {
    const deleteId = req.params.id
    console.log(req.params)
    const index = array.findIndex(element => element.messageId == deleteId)
    if(index === -1){
      return res.status(404).send("Message not found")
    }
    array.splice(index, 1)
    res.status(200).send(array)
    
  }
}