const { connect } = require("mongoose");

export async function testMongo() {
  try {
    await mongoose.connect('mongodb://localhost:3300/aula', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    throw error;
  }
}

connect(
  "mongodb+srv://joaospanol:aMq7FWKgP8izlpwe@bd.km5zp.mongodb.net/aula",
  null
)
  .then(() => console.log("Banco conectado"))