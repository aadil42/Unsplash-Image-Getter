import React, { useReducer } from 'react';
import { state } from './Context';
import Heading from './FComponents/Heading';
import SearchBar from './FComponents/SearchBar';
import ImageLayout from './FComponents/ImagesLayout';
import NotFound from './FComponents/NotFound';
import MyLoader from './FComponents/MyLoader';
import ConnectionError from './FComponents/ConnectionError';
// importing css 
import './MyCss/myStyle.scss';



const App = () => {

const { reducer } = state;
const [initialState, dispatch] = useReducer(reducer, state); 
const {isLoading, querySuccess, network_error } = initialState;

  return(
      <> 
        <Heading initialState={initialState}/>
        <SearchBar initialState={initialState} dispatch={dispatch} />
        {isLoading && <MyLoader/> }  
        {querySuccess && <ImageLayout initialState={initialState} dispatch={dispatch} />}        
        {!querySuccess && !isLoading && !network_error && <NotFound initialState={initialState}/> }
        {network_error && <ConnectionError />}
      </>
  );
}

export default App;
