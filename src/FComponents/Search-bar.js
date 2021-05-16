import { useReducer } from 'react';
import { useContext } from 'react';
import { myState } from '../Context';

const SearchBar = () => {
const FetchedState = useContext(myState);
const { reducer } = FetchedState;
const [initialState, dispatch] = useReducer(reducer, FetchedState);


async function handleSubmit(inputText = null) {
  
  let response = await fetch(initialState.SearchByTermUrl);
  // let response = await fetch('https://source.unsplash.com/collection/190727');
  response = await response.json();
  // console.log(inputText, response);
  dispatch({type: 'fetchImages', data: response});
}
console.log(initialState.imagesArr);


  return(
    <>
    <form action="#" className="searchForm" onSubmit={(e) => {
      e.preventDefault();
      
      const inputText = document.querySelector('.searchText').value;
      handleSubmit(inputText);
    }}>
     <input type="text" className="searchText" />
     <input type="submit" className ="submitButton" value="Search" />   
   </form> 
    </>
  );
}

export default SearchBar;