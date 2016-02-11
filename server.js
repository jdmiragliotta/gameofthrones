var express = require("express");
var app = express();
var expressHandlers = require("express-handlebars");

var lineage = {
  lannister: {
    house: 'House Lannister',
    parents: {
      first_parents: 'Joanna & Tywin',
      second_parents: 'Devan & Dorna'
    },
    child: {
      first_child: 'Cersei',
      second_child: 'Jaime',
      third_child: 'Tyrion',
      fourth_child: 'Lancel'
    }
    },
  targaryen: {
    house: 'House Targaryen',
    parents: 'Aerys II & Rhaella',
    child: {
      first_child: 'Rhaegar',
      second_child: 'Viserys',
      third_child: 'Daenerys'
    }
  },
  stark: {
    house: 'House Stark',
    parents: 'Eddard & Catelyn',
    child: {
      first_child: 'Robb',
      second_child: 'Sansa',
      third_child: 'Arya',
      fourth_child: 'Bran',
      fifth_child: 'Rickon'       
    }
  },
  };
var PORT = 8090;

app.engine("engine", expressHandlers({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.get("/GOT",function(req, res){
  res.render("house", lineage);
});

app.listen(PORT, function(){
  console.log("App is listening to %s", PORT);
});
