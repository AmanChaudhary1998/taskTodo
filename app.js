const express = require('express');
const connectDB = require('./db/db');
const taskRoute = require('./routes/task');


const app = express();

connectDB();

app.use(express.json({extended:false}))
// app.get('/', async (req,res)=>{
//     res.send("Todo Task");
// });

app.use('/',taskRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT,async ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})