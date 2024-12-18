const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    dataNascimento: Date,
    idProfessor: String
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = { Professor }