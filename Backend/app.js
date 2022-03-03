const express =require('express')

const app  = express()

const port = process.env.PORT || 5000

app.get('/',(req,res,next)=>{
     res.send('<h1>Hello codeSoftic</h1>')
})



app.listen(port,()=>{
    console.log(`server running on port ${port} `)
})