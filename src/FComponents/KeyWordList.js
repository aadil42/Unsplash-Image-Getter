

const KeyWords = ({initialState, dispatch}) => {

  // const { keyWords, Action } = initialState;

  // const showLoaderUntilFetching = (selectedKeyWord) => {

  //   dispatch({type: Action.SHOW_LOADER});
  //   handleClick(selectedKeyWord);
  // }

  // async function handleClick(selectedKeyWord){
  //   let response = await fetch(yourUrl);
  //   response = await response.json();

  //   checkFetchedImages(Action.FETCH_IMAGES, response, dispatch, selectedKeyWord);
  // }

  return(
    <>
    {keyWords.map((element, index) => {
        return (
          <span onClick={() => {
            showLoaderUntilFetching(element);
          }}>{element}</span>
        );
      })}
    </>
    )
}

export default KeyWords();