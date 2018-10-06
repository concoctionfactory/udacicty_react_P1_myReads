import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  self;
  state = {
    booksArray:[],
  }
  

  componentDidMount(){
    console.log(BooksAPI.getAll());
    BooksAPI.getAll().then((booksArray)=>{
      this.setState({booksArray})
    })
    console.log(this.state)
  }


  removeBook = (book)=>{
    this.setState((state)=>({
      booksArray : state.booksArray.filter(cbooks =>cbooks.id !== book.id)
    }))
  }


  addBook =(book) =>{
    this.setState(state =>({
      booksArray: state.booksArray.concat([book])
    }))
  }


  changeShelve(book, targetShelf){

    if(book.shelf !== targetShelf){
      BooksAPI.update(book,targetShelf).then(function(){
        self.removeBook(book);
        book.shelf =targetShelf;
        self.addBook(book);
      })
    }
  }


  render() {
    self =this;
    console.log(this.state);
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <div>
            <BooksList
              booksArray={this.state.booksArray}
              changeShelve={this.changeShelve}
            /> 
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        
        <Route path="/search" render={ ()=>(
         <SearchBooks
          booksArray={this.state.booksArray}
          changeShelve={this.changeShelve}
         />
        )}
        />
      </div>

    )
  }
}

export default BooksApp
