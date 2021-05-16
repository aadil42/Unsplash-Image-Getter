import React from 'react'; 

// this is the reducer it's where all your action will be executed 
const reducer = (state, action) => {

 switch(action.type) {
   case "fetchImages" :
    return {...state, imagesArr: action.data, isLoading: false, querySuccess: true}

   case "initialRender": 
    return {...state, imagesArr: action.data, isLoading: false, querySuccess: true}
  
    case "resultNotFound":
      return {...state, querySuccess: false, isLoading: false}
 
    case "showLoader":
      return {...state, isLoading: true}

    default :
       return {state}  
 }
}

const state = {
  ApiUrl: `https://api.unsplash.com/search/photos?query=`,
  query: `"london"`,
  client_id: `&client_id=icX6L7nX2IPHJTBm-wvIUvSUbBKi386AKavHF_MNYto`,
  applicationName: 'Unsplash-Image-Getter',
  imagesArr: [],
  isLoading: true,
  querySuccess: true, 
  notFoundMassege: 'Sorry, Image cannot be found',
  reducer
}

const myState = React.createContext(state);



export {state, myState};

