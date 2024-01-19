const getTheTitles = function(books) {
    const titleArray =[]
    for (let i = 0; i < books.length; i++) {
    titleArray[i] = books[i].title;
   }
    return titleArray;
    // shorter version
    //return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
