var booksByCategory = [

    {
    category: "Romance",
    books: [
    {
    title: "O Sol Também é Uma Estrela",
    author: "Nicola Yoon",
    },
    {
    title: "O Noivo da Minha Melhor Amiga",
    author: "Emily Gin",
    
    },
    {
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    },
    ],
    },
    
    {
    category: "Fantasia",
    books: [
    {title: "Harry Potter e a Pedra Filosofal",author: "J.K. Rowling"},
    {title: "OHobbit", author: "J.R.R. Tolkien", },
    {title: "Eragon", author: "Christopher Paolini", },
    {title: "O Nome do Vento", author: "Patrick Rothfuss", }, 
    ], 
    }
    
    
    ]

function countBooksInCategory(booksByCategory) {
    var count = {};
    booksByCategory.forEach(obj => {
        count[obj.category] = obj.books.length;
    });
    return count;
}

console.log(countBooksInCategory(booksByCategory));