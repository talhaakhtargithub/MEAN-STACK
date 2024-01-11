const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database')

mongoose.connect(config.database)

mongoose.connection.on('connected',()=>{
    console.log(`Connected to DB ${config.database}` )
})





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