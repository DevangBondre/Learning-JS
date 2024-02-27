class book{
    constructor(title,author,noOfPages,hasRead){
        this.title = title;
        this.author = author;
        this.noOfPages = noOfPages;
        this.hasRead = hasRead;
    }


getBooksInfo(){
    const read = this.hadRead ? "have read" : "haven't read";
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${read}`;
}
}

const myBook = new book("Rich Dad Poor Dad","Robert Kiyosaki",200,false)

console.log(myBook.getBooksInfo())