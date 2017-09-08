import React, {Component} from 'react'
import BooksBook from './BooksBook'

class BooksShelf extends Component{
    

    render(){
        const{name}=this.props;
        const{booksArray, changeShelve}=this.props;
        //console.log(this);
        return(
            <div className="bookshelf">
                {name != null &&(
                    <h2 className="bookshelf-title">{name}</h2>
                )}

                <div className="bookshelf-books">
                
                    <ol className="books-grid">
                        {booksArray.map( book =>
                            <BooksBook  book={book} className="book" key={book.id}  changeShelve={changeShelve}/>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf