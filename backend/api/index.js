import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('Welcome to Socail app')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server runing on port : ${PORT}`))






