const express = require('express');
require('./conexaobd.js')
const app = express();
const { Aluno } = require('./bd/aluno');
const { Professor } = require('./bd/professor')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/professor', async (req, res) => {
    console.log(req)
    const professor = await Professor.create(req.body)
    return res.json(professor)
})

app.post('/aluno', async (req, res) => {
    console.log(req)
    const aluno = await Aluno.create(req.body)
    return res.json(aluno)
})

app.listen(3300);