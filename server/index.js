require('../server/MongoDbConnection')
const Auth=require('../server/routers/auth')
const Project=require('../server/routers/startupproject')
const Follow=require('../server/routers/followrouter')
const express=require('express')
require('dotenv').config();
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const {createServer}=require('http')



app.use(cors());
app.use(bodyparser.json());

const server=createServer(app);




server.listen(8000,()=>console.log("Server running on 3560"));








//app routes
app.use('/auth',Auth);
app.use('/post',Project);
app.use('/follow',Follow);