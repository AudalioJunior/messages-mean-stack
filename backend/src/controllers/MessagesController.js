const express = require('express');
const router = express.Router();
const Messages = require('../models/MessageModel');
const User = require('../models/UserModel');

router.get('/getMessages', async (req, res) => {
    const messages = await Messages.find();
    return res.json({messages})
})

router.post('/sendMessage', async (req, res) => {
    try {
        const user = await User.findOne({_id: req.body.user_id});
        const message = new Messages({
            content: req.body.content,
            user: req.body.user_id,
            userName: user.userName
        })
        user.messages.push(message._id);      
        await message.save();
        await User.findByIdAndUpdate(user._id, user)

        return res.json({message})
    } catch (error) {
        return res.status(400).json({erro: 'Erro ao enviar essa mensagem!'})
    }
})

router.put('/updateMessage', async (req, res) => {
    try {
        const {_id, content} = req.body;
        await Messages.findByIdAndUpdate(_id, {content: content});
        return res.json({message: "Atualizado com sucesso!"})
    } catch (error) {
        return res.status(400).json({erro: 'Erro ao atualizar essa mensagem!'})
    }
})

router.delete('/deleteMessage/:id', async (req, res) => {
    try {
        const message = await Messages.findOne({_id: req.params.id})
        await message.remove();
        await User.updateOne({_id: {$in: message.user}},
            {$pull: {messages: message._id}})
        return res.json({message: "Mensagem removida com sucesso!", id: message.id})   
    } catch (error) {
        return res.status(400).json({erro: 'Erro ao deletar essa mensagem!'})
    }
})

module.exports = router;