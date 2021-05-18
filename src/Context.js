import React from 'react'; 

// this is the reducer it's where all your action will be executed 
const reducer = (state, action) => {

 switch(action.type) {
   case "FETCH_IMAGES" :
    return { 
      ...state, 
      imagesArr: action.data,
      isLoading: false, 
      querySuccess: true, 
      rendering_initially: false,
    }

   case "RENDER_INITIALLY": 
    return {
      ...state,
       imagesArr: action.data,
       isLoading: false,
       querySuccess: true,
       }
  
    case "RESULT_NOT_FOUND":
      return {
        ...state,
        querySuccess: false,
        isLoading: false,
        curruntQuery: action.curruntQuery
      }
 
    case "SHOW_LOADER":
      return {
        ...state,
        isLoading: true,
        querySuccess: false
        }

    default :
       return state;  
 }
}

// checks fetched images
function checkFetchedImages(actionType, response, dispatch, textInput = "") {

  if(response.total > 0) {
    dispatch({type: actionType, data: response.results});
  } else if(parseInt(response.total) === 0) {
    dispatch({type: "RESULT_NOT_FOUND", curruntQuery: textInput});
  } 
}

const Action = {

 FETCH_IMAGES: 'FETCH_IMAGES',
 RENDER_INITIALLY: 'RENDER_INITIALLY',
 RESULT_NOT_FOUND: 'RESULT_NOT_FOUND',
 SHOW_LOADER: 'SHOW_LOADER',
}

const state = {
  ApiUrl: `https://api.unsplash.com/search/photos?query=`,
  query: `"london"`,
  curruntQuery: '',
  client_id: `&client_id=icX6L7nX2IPHJTBm-wvIUvSUbBKi386AKavHF_MNYto`,
  applicationName: 'TryNewStuff',
  imagesArr: [],
  rendering_initially: true,
  isLoading: true,
  querySuccess: true, 
  reducer,
  checkFetchedImages, 
  Action
}

const myState = React.createContext(state);



export {state, myState};

