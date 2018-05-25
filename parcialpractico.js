
express = require('express'),
engines = require('consolidate');

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));



// Iniciar servidor
app.listen(5000);
console.log("Escuchando servidor")

var path = require('path');

helper.write = function(data,filename){
  if(typeof data !== "string") data = JSON.stringify(data);
  var file = path.join(__dirname, 'output', filename);
  fs.writeFileSync(file, data);
};