const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});