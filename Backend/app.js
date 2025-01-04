const dotenv =require('dotenv');
dotenv.config();
const express =require('express');
const app =express();
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.routes');

const connectToDb=require('./db/db');
connectToDb();

const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/user',userRoutes);

module.exports=app;