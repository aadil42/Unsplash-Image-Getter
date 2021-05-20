
export default function SearchBar({initialState, dispatch}) {

  const { 
     checkFetchedImages,
     Action, 
     ApiUrl, 
     client_id,
     currunt_page,
     per_page } = initialState;

  function showLoaderUntilFetching(inputText = "") {
    dispatch({type: Action.SHOW_LOADER});
    handleSubmit(inputText);
  }

  async function handleSubmit(inputText = null) {

    try {
      let response = await fetch(ApiUrl.concat(inputText.concat(`&page=${currunt_page}&per_page=${per_page}`).concat(client_id)));
      response = await response.json();
      checkFetchedImages(Action.FETCH_IMAGES, response, dispatch, inputText);
    } catch(e) {
      console.log(e)
       dispatch({type: Action.NETWORK_ERROR});
    }
  }

  return (
    <>
 <form action="#" className="searchForm" onSubmit={(e) => {
    e.preventDefault();
    
    const inputText = document.querySelector('.searchText').value;
    showLoaderUntilFetching(inputText);
  }}> 
   <input type="text" className="searchText" />
   <input type="submit" className ="submitButton" value="Search" />   
 </form> 
    </>
  )
}
