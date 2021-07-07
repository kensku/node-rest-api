module.exports = (app) => {
    app.get('/', (req, res) =>
    res.send('<h1>First page</h1>'));
};