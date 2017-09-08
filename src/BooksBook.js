import React, {Component} from 'react'

class BooksBook extends Component{
    
    onSelect= function(e){
        e.preventDefault();
        var targetShelf= e.target.value;
        this.props.changeShelve( this.props.book ,targetShelf )
    }

    render(){
        const{book}= this.props;
        //console.log(this);
        book.shelf =(book.shelf)?  book.shelf: "none";

        return(
            <div>
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
                    {book.authors != null &&(
                        //console.log(this.props.book.authors),
                        book.authors.map(author=>
                            <div className="book-authors" key={author} >{author}</div>
                        )                            
                    )}
                </div>
            </div>
        )
    }
}

export default BooksBook