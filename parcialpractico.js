
express = require('express'),
engines = require('consolidate');

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));



//n Iniciar servidor
app.listen(5000);
console.log("Escuchando servidor")