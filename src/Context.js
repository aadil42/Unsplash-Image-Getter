
// this is the reducer this is where all your action will be executed 
const reducer = (state, action) => {
 switch(action.type) {
   case "FETCH_IMAGES" :
    return { 
      ...state, 
      imagesArr: action.data.results,
      isLoading: false, 
      querySuccess: true, 
      curruntQuery: action.curruntQuery,
      rendering_initially: false,
      network_error: false,
      total_pages: action.data.total_pages
    }

   case "RENDER_INITIALLY": 
    return {
      ...state,
       imagesArr: action.data.results,
       isLoading: false,
       querySuccess: true,
       network_error: false,
       total_pages: action.data.total_pages
    }
  
    case "RESULT_NOT_FOUND":
      return {
        ...state,
        querySuccess: false,
        isLoading: false,
        curruntQuery: action.curruntQuery,
        network_error: false,
        total_pages: 0
      }
 
    case "SHOW_LOADER":
      return {
        ...state,
        isLoading: true,
        querySuccess: false,
        network_error: false,
        total_pages: 0
        }

    case "NETWORK_ERROR":
      return {
        ...state,
        isLoading: false,
        querySuccess: false,
        network_error: true,
        total_pages: 0
      }
      
    default :
       return state;  
 }
}

// checks fetched images
function checkFetchedImages(actionType, response, dispatch, textInput = "") {

  if(response.total > 0) {
    dispatch({type: actionType, data: response, curruntQuery: textInput});
  } else if(parseInt(response.total) === 0) {
    dispatch({type: "RESULT_NOT_FOUND", curruntQuery: textInput});
  } 
}

const Action = {

 FETCH_IMAGES: 'FETCH_IMAGES',
 RENDER_INITIALLY: 'RENDER_INITIALLY',
 RESULT_NOT_FOUND: 'RESULT_NOT_FOUND',
 SHOW_LOADER: 'SHOW_LOADER',
 NETWORK_ERROR: 'NETWORK_ERROR'
}

const state = {
  ApiUrl: `https://api.unsplash.com/search/`,
  Defaultquery: `"london"`,
  client_id: `&client_id=icX6L7nX2IPHJTBm-wvIUvSUbBKi386AKavHF_MNYto`,
  applicationName: 'TryNewStuff',
  currunt_page: 1,
  curruntQuery: '',
  per_page: 25,
  imagesArr: [],
  rendering_initially: true,
  isLoading: true,
  querySuccess: true, 
  reducer,
  checkFetchedImages, 
  keyWords: [
    "Technology",
    "Network",
    "Computer",
    "Codding",
    "Human",
    "Business"
  ],
  Action,
  network_error: false
}


export {state};

