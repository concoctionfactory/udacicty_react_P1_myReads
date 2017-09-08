import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BooksShelf from './BooksShelf'

import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
    state = {
       searchArray:[]
    }
    
    searchArrayShelveSet=(searchArray, booksArray)=>{
        booksArray.forEach(function(item){
            console.log( searchArray.findIndex( cbook=> cbook.id === item.id));
            var searchIndex =searchArray.findIndex( cbook=> cbook.id === item.id);
            if (searchIndex>=0){
                searchArray[searchIndex].shelf = item.shelf
            }
        })
        console.log(searchArray);
    }

    handleSearch=(e) =>{
       // console.log(e.target.value);
       // console.log(e.keyCode);
        if(e.keyCode===13){
            console.log(e.target.value);
            var query=(e.target.value).trim();
            BooksAPI.search(query, 20).then((searchArray)=>
            this.setState({searchArray}));
        }
    }


    render(){
        const{booksArray, changeShelve}= this.props;
        if(this.state.searchArray.length >1){
            this.searchArrayShelveSet(this.state.searchArray, booksArray);
        }
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link  className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onKeyUp={(e)=> this.handleSearch(e)}type="text" placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchArray.length >1 &&
                           <BooksShelf className="bookshelf" booksArray={this.state.searchArray} changeShelve={changeShelve} name=""/>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks