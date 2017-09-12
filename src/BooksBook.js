import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BooksBook extends Component{
    static PropTypes={
        booksArray: PropTypes.array.isRequired,
        changeShelve: PropTypes.func.isRequired 
    }
    
    onSelect= function(e){
        e.preventDefault();
        var targetShelf= e.target.value;
        this.props.changeShelve( this.props.book ,targetShelf )
    }

    render(){
        const{book}= this.props;
        book.shelf =(book.shelf)?  book.shelf: "none";
        var authors = book.authors ? book.authors.join(', '): '';

        return(
            <div className="book" key={book.id}>
                <div className="book-top">
                    <div className="book-cover" 
                        style={{backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>

                    <div className="book-shelf-changer">
                        <select onChange={(e) =>this.onSelect(e)} value={book.shelf} >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div> 
                </div>

                <div className="book-title">{book.title}</div>
                <div className="book-authors" key={authors} >{authors}</div>
                
            </div>
        )
    }
}

export default BooksBook