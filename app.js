const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 5000

const limiter = rateLimit({
    windowMs: 15 * 60 * 100, // 15 minutes
    max : 5,
    standardHeaders: true,
    message : "Too many request"
})

app.use('/api', limiter);

app.get('/api/v1/', (req, res, next)=>{
   res.status(200).json({name:"kuldeep", age:20});
})

app.get('/login', limiter, (req, res, next)=>{
    res.send('this is login endpoint');
});

app.listen(PORT, ()=>{
    console.log(`App is running on port:${PORT}`);
})

