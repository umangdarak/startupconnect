require('../server/MongoDbConnection')
const Auth=require('../server/routers/auth')
const express=require('express')
require('dotenv').config();
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');

cors();
app.use(bodyparser.json());


app.listen(5000,()=>console.log("Server running on 5000"));








//app routes
app.use('/auth',Auth);
