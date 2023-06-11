const app=require('./app');
const dotenv=require('dotenv');

dotenv.config();

const connectDatabase=require('./database');
// connecting to database
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})