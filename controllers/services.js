module.exports = (app) => {
    app.get('/services', (req, res) =>
    res.send('<h1>You are at the guest services</h1>')
    );
    app.post("/services", (req, res) => {
        res.send(`<h1>Rota POST de usuário ativada:
        tarefa adicionada ao  banco de dados</h1>`);
      });
};

//module.exports = {getServices};