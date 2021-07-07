module.exports = (app) => {
    app.get("/appointment", (req, res) =>{
        res.send('<h1>You are at the appointment page</h1>');
    });
};

//module.exports = {getAppointment};