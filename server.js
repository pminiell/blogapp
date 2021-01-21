const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb+srv://mongodb:GlarkOn7@cluster0.iczlc.mongodb.net/mongodb?retryWrites=true&w=majority', 
    { useNewUrlParser: true ,  useUnifiedTopology: true, useCreateIndex: true })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'descending' })
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter )

const PORT = 5000

app.listen(PORT)
console.log(`Server is running on PORT ${PORT}`)

