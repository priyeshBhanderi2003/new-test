const express = require('express');
const PORT = 3003;

const app = express();

app.use('/',( req,res)=> {
    res.json({message:"hello"});
});


app.listen(PORT, () => {
    console.log("runing", PORT);
})