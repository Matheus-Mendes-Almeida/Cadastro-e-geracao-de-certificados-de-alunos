const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    dataNascimento: Date,
    idAluno: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = { Aluno }
