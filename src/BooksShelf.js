import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksBook from './BooksBook'

class BooksShelf extends Component{
    static PropTypes={
        booksArray: PropTypes.array.isRequired,
        changeShelve: PropTypes.func.isRequired 
    }
    
    render(){
        const{booksArray, changeShelve, name}=this.props;
        return(
            <div className="bookshelf">
                {name != null &&(
                    <h2 className="bookshelf-title">{name}</h2>
                )}

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksArray.map( book =>
                            <li key={book.id}>
                                <BooksBook  book={book} className="book"   changeShelve={changeShelve}/>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf