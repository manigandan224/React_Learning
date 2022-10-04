import React from 'react'; //ES6 Module
import ReactDOM  from 'react-dom';

//css
import './index.css';
import {books} from './books';
import Book from './Book';

//stateless function
//must return jsx
//nested components
function Greeting()
{
  return(
    <div>
      <Person/>
      <Message/> 
    </div>
  );
}

// const Greeting = () =>
// {
//   return React.createElement('div',{},React.createElement('h1',{},'Hello World'));
// }

const Person = () => <h1>Manigandan</h1>;
const Message = () =>{
  return <p>this is a message.</p>;
}

// ReactDOM.render(<Greeting/>,document.getElementById('root'));

function BookList(){
  return(
    <section className='bookList'>
      {
        books.map((booklist,index)=>{
          return <Book key={booklist.id} {...booklist}></Book>
        })
      }
    </section>
  );
}

ReactDOM.render(<BookList/>,document.getElementById('root'));