const express=require('express');

const app=express();
app.use(express.json());
// route imports

const product=require('./routes/productRoute');
const user =require('./routes/userRoute');

app.use('/api/vi',product);
app.use("/api/vi",user);













module.exports=app;