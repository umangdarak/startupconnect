require('../server/MongoDbConnection')
const Auth=require('../server/routers/auth')
const Project=require('../server/routers/startupproject')
const express=require('express')
require('dotenv').config();
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const io=require('socket-io');
const {createServer}=require('http')



app.use(cors());
app.use(bodyparser.json());

const server=createServer(app);

const socket=io(server);



server.listen(8000,()=>console.log("Server running on 3560"));








//app routes
app.use('/auth',Auth);
app.use('/post',Project);