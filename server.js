import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js'

const app = express();
const PORT = 2000;

app.use(bodyParser.json());
app.use('/books', booksRoutes);

app.get('/', (req, res)=>{
    res.send('hello from the other side');
})
 
app.listen(PORT, ()=>{
    console.log('its running u maggot')
})
