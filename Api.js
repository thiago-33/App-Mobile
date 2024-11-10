const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let locaisReciclagem = [
    { id: 1, nome: 'Parque Olimpico', cidade: 'Mogi das Cruzes' },
    { id: 2, nome: 'Jd. Armenia', cidade: 'Mogi das Cruzes' }
];

// Listar todos os locais
app.get('/locais', (req, res) => {
    res.json(locaisReciclagem);
});

// Adicionar um novo local
app.post('/locais', (req, res) => {
    const novoLocal = req.body;
    locaisReciclagem.push(novoLocal);
    res.status(201).json(novoLocal);
});

// Editar um local existente
app.put('/locais/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = locaisReciclagem.findIndex(local => local.id === id);
    if (index !== -1) {
        locaisReciclagem[index] = req.body;
        res.json(locaisReciclagem[index]);
    } else {
        res.status(404).send('Local não encontrado');
    }
});

// Excluir um local
app.delete('/locais/:id', (req, res) => {
    const id = parseInt(req.params.id);
    locaisReciclagem = locaisReciclagem.filter(local => local.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`API de Locais de Reciclagem rodando em http://localhost:${port}`);

});