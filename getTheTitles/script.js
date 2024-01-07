const books = [{
    title : 'You cant hurt me ',
    author : 'David Goggins'
},
{
    title : ' Politics',
    author : 'Aristotle'

}]

function getTitle(books){
    return books.map(books=>books.title)
    
}

const getTitleSoln = getTitle(books)
console.log("The two books are :  " + getTitleSoln)    