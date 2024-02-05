let books = [];
let id = 0;

export const createBook = (req, res)=>{
    const book = req.body;
    books.push({...book, id: id});
    res.send(`book added successfully!`);
    id+=1;
}

export const getBooks = (req,res) =>{
    res.send(books);
}

export const getBook =  (req,res) =>{
    const { id }  = req.params;
    const foundBook = books.find((book)=> book.id === parseInt(id))
    res.send(foundBook)
}

export const editBook = (req, res) =>{
    const { id } = req.params;
    const { name, author, date} = req.body;
    const book = users.find((book) => book.id === parseInt(id))

    if(name) book.name =  name;
    if(author) book.author = author;
    if(date) book.date = date;

    res.send("book updated")
}

export const deleteBook = (req,res) =>{
    const { id } = req.params;

    books = books.filter((book) => book.id !== parseInt(id))

    res.send("Book deleted successfully!")
}