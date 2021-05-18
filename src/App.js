import React, { useReducer } from 'react';
import { myState, state } from './Context';
import Heading from './FComponents/Heading';
import SearchBar from './FComponents/SearchBar';
import ImageLayout from './FComponents/ImagesLayout';
import NotFound from './FComponents/NotFound';
import MyLoader from './FComponents/MyLoader';

// importing css 
import './MyCss/myStyle.scss';



const App = () => {

const { reducer } = state;
const [initialState, dispatch] = useReducer(reducer, state); 
const {isLoading, querySuccess } = initialState;

  return(
    <myState.Provider value={initialState}>
       <Heading initialState={initialState}/>
       <SearchBar initialState={initialState} dispatch={dispatch} />
       {isLoading && <MyLoader initialState={initialState} dispatch={dispatch}/>}  
       {querySuccess && <ImageLayout initialState={initialState} dispatch={dispatch} />}
       {!querySuccess && !isLoading && <NotFound initialState={initialState}/> }
    </myState.Provider> 
  );
}

// export {state};
export default App;
