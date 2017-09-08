import React, {Component} from 'react'
import BooksShelf from './BooksShelf'



class BooksList extends Component{
    filterShelve(array,filter){
        return(
            array.filter(book => book.shelf === filter)
        )
    }


    render(){
        const{booksArray,changeShelve}= this.props;
        const currentlyReading ="currentlyReading";
        const wantToRead ="wantToRead";
        const read ="read";
        const none = "none";

        return(

        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                
                <BooksShelf className="bookshelf" booksArray={this.filterShelve(booksArray,currentlyReading)} changeShelve={changeShelve} name="Currently Reading"/>
                <BooksShelf className="bookshelf" booksArray={this.filterShelve(booksArray,wantToRead)} changeShelve={changeShelve} name="Want to Read"/>
                <BooksShelf className="bookshelf" booksArray={this.filterShelve(booksArray,read)} changeShelve={changeShelve} name="Read"/>
                <BooksShelf className="bookshelf" booksArray={this.filterShelve(booksArray,none)} changeShelve={changeShelve} name="none"/>
                
            </div>
        </div>
        )
    }
}

export default BooksList