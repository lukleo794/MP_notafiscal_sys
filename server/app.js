const express = require ('express');
const app = express ();
const PORT = 1029
const hbs = require('express-handlebars');
const path = require('path');

app.engine('hbs',hbs.engine({
    extname: 'hbs',
    defaltLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname,'public')))

const indexRoute = require('./routes/indexRoute');
const portfolioRoute = require("./routes/portfolioRoute");

app.use('', indexRoute);
app.use("/portfolio", portfolioRoute);

app.listen(PORT, () => {
    console.log('app is running')
})