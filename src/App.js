import React, { useReducer } from 'react';
import { myState, state } from './Context';
import Heading from './FComponents/Heading';
// import SearchBar from './FComponents/Search-bar';
import ImageLayout from './FComponents/ImagesLayout';

// import Loader from 'react-loader-spinner';


// importing css 
import './MyCss/myStyle.scss';


const App = () => {

const { reducer } = state;
const [initialState, dispatch] = useReducer(reducer, state); 

console.log(initialState.isLoading);
  return(
    <myState.Provider value={initialState}>
       <Heading />
       <ImageLayout />       
       {/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={100 * 19.2}  /> */}
    </myState.Provider>
  )

}

// export {state};
export default App;
