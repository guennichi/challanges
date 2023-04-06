const express= require('express');
const todoroutes = require('./routes/todo');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/register');


mongoose.connect('mongodb+srv://jimbob:NordinKhaled1*@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use('/api/todo', todoroutes);
app.use('/api/user', userRoutes);

app.use(todoroutes,require('./routes/todo'));

app.use(bodyParser.json());


app.get('/get',function(req,res){
  
    res.send({titre:'hello word!'})
});








app.listen(process.env.port || 4000,function(){
    console.log('now listenning for requests');
});