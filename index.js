const customExpress = require('./config/customExpress.js')

const app = customExpress();

app.listen(3000, () => console.log('rodando e cantando'));



// const {getServices} = require('./controllers/services.js')
// const {getMain} = require('./controllers/main.js')
// const {getAppointment} = require('./controllers/appointment.js')

// getServices(app);
// getMain(app);
// getAppointment(app);

