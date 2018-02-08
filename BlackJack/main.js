const express = require('express');
let app = express();
const path = require('path');

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const Cookies = require( "cookies" );
const session = require('express-session');
const mongoose = require("mongoose");
const api = require('./api.js');


let url = "mongodb://localhost:27017/blackjack";

const auth = function(req, res, next) {
  if (req.session && req.session.name)
    return next();
  else
    return res.redirect('/singIn');
};
 

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use('/',express.static(path.join(__dirname, 'public')));



app.get('/', (req, res)=>{

	res.render('index');
});

app.get('/singIn', (req, res)=>{
	res.render('singIn');
});
app.post('/singIn', (req, res)=> { 

  if(!req.body) return res.sendStatus(400);
  	const {name, pass} = req.body;
    let data = {name, pass};

    api.checkUser(data)
			.then((name)=>{
				if(name){
					var cookies = new Cookies( req, res); 
            		req.session.name = name;
    			    api.getUser(name).then((result)=>{
										let bet = result.bet;
										let user = result.name;
										res.render('tablePlay',{bet, user});
									});					
				} else {
					res.redirect('/singIn');								
				}
			})
			.catch((error)=>{
				res.send(400, error);				
			});  
});


app.get('/registration', (req, res)=>{
	res.render('registration');
});
app.post('/registration', (req, res)=> {  
  if(!req.body) return res.sendStatus(400);
    const {name, email, pass} = req.body;
    let data = {name, email, pass};
    
    api.createUser(data)
		  	.then(function(result){
		  		res.redirect('/singIn');
		  	})
		  	.catch(function(err){
		  		res.redirect('/registration');
		  	});    
});


app.get('/tablePlay', auth, (req, res)=>{

	res.render('tablePlay');

});

app.use((req, res, next)=>{
	res.send('Error 404 not found!');
	next();
});

app.use((error, req, res, next)=>{
	console.log(error);
	res.send('Error 500 server not work!');
	next();
});

io.on('connection', function(socket){ 
  socket.emit("bet", 'Welcome in the socket');
  // socket.on('result', (data)=>{console.log(data)});
  socket.on('result', (data)=>{api.updateUser(data);});
});

server.listen(3000, ()=>{
	console.log('Server listening at port 3000');
});


