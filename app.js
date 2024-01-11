const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database')

mongoose.connect(config.database)

mongoose.connection.on('connected',()=>{
    console.log(`Conncted to DB ${config.database}` )
})

const port=3000;

//App
const app=express();

const users=require("./routes/users")

//CORS
app.use(cors());



//static folder
app.use(express.static(path.join(__dirname,'public')))
//Body Part MiddleWare
app.use(bodyParser.json());


app.use('/users',users)



//Index Route
app.get('/',(req,res)=>{
    res.send("INVALID EndPoint")

})

//Start Server
app.listen(port,()=>{
    console.log(`Server start at port ${port}`);
})