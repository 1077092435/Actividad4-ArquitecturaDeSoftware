exports.sendMessage = (req, res) => {
    const { message } = req.body;
    res.json({ reply: `Recibido: ${message}` });
};
