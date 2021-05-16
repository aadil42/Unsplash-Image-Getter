import { myState } from '../Context';
import { useContext, useReducer, useEffect} from 'react';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core';

// css for loading component
const loadingStyle = css`
display: block;
margin: auto;
margin-top: 9rem;
`

const ImageLayout = () => {
const FetchedState = useContext(myState); 
const { reducer } = FetchedState;
const [initialState, dispatch] = useReducer(reducer, FetchedState);
// checks the returned response from unsplash
function checkFetchedImages(actionType, response) {

  if(response.total > 0) {
    // console.log('from if');
    console.log(actionType);
    dispatch({type: actionType, data: response.results});
  } else if(response.total == 0) {
    console.log('from else');
    dispatch({type: "resultNotFound"});
  } 
}

// fetches images initially when component renders
useEffect( async () => {
  let response = await fetch(initialState.ApiUrl.concat(initialState.query.concat(initialState.client_id)));
  response = await response.json();
  checkFetchedImages("fetchImages", response);
}, []);

function showLoaderUntillImage(inputText= null) {

  console.log(inputText);
  dispatch({type: 'showLoader'});
  handleSubmit(inputText);
}

// fetches images when searched
async function handleSubmit(inputText = null) {
  let response = await fetch(initialState.ApiUrl.concat(inputText.concat(initialState.client_id)));
  response = await response.json();
  console.log(response);
  checkFetchedImages("fetchImages", response);
}
 
if(initialState.isLoading) {
return(
  <>
   <form action="#" className="searchForm" onSubmit={(e) => {
    e.preventDefault();
    
    const inputText = document.querySelector('.searchText').value;
    showLoaderUntillImage(inputText);
  }}>
   <input type="text" className="searchText" />
   <input type="submit" className ="submitButton" value="Search" />   
 </form> 
 < BounceLoader css={loadingStyle} size={150}/>
  </>
);
} else if(initialState.querySuccess) {

 return (
  <>
  <form action="#" className="searchForm" onSubmit={(e) => {
    e.preventDefault();
    
    const inputText = document.querySelector('.searchText').value;
    showLoaderUntillImage(inputText);
  }}>
   <input type="text" className="searchText" />
   <input type="submit" className ="submitButton" value="Search" />   
 </form> 

   <div className="ImagesContainer">
    {initialState.imagesArr.map((element, index) => {
      return(
        <img key={index} src={element.urls.regular} alt="unsplashImage"/>
      ); 
    })}
  </div>
 </> 
 )
} else {
  return (
    <>
  <form action="#" className="searchForm" onSubmit={(e) => {
    e.preventDefault();
    
    const inputText = document.querySelector('.searchText').value;
    showLoaderUntillImage(inputText);
  }}>
   <input type="text" className="searchText" />
   <input type="submit" className ="submitButton" value="Search" />   
 </form> 
    <MdSentimentVeryDissatisfied className="notFoundIcon"/>
    <h1 className="notFoundMassege">{initialState.notFoundMassege}</h1>
    </>
  );
}
}

export default ImageLayout;