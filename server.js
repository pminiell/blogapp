const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb+srv://mongodb:GlarkOn7@cluster0.iczlc.mongodb.net/mongodb?retryWrites=true&w=majority', 
    { useNewUrlParser: true ,  useUnifiedTopology: true })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    const articles = [{
        title: 'test article',
        createdAt: new Date(),
        description: 'this is a test description',
    },{
        title: 'test article 2',
        createdAt: new Date(),
        description: 'this is a test description 2',
    }]
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter )

const PORT = 5000

app.listen(PORT)
console.log(`Server is running on PORT ${PORT}`)

