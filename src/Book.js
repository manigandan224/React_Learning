import React from 'react'

const Reference = () =>{
  alert("Hello world");
}

const ComplexExample = (author) =>{
  alert(author);
}
function Book({title,author,book}){
  // destructuring the props.
 // const {title, author, book} = props;
  return(
    <article className="book" onMouseOver={()=>
      console.log(author)
    }>
      <img src={book}></img>
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={Reference}>Reference example</button>
      <button type="button" onClick={()=> ComplexExample(author)}>ComplexExample</button>
    </article>
  );
}

export default Book
