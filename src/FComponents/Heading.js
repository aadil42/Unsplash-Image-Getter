import { useContext, useReducer } from 'react';
import { myState } from '../Context';
// import {state} from '../App';

const Heading = () => {

  const  FetchedState  = useContext(myState);
  const { reducer } = FetchedState;
  const [initialState, dispatch] = useReducer(reducer, FetchedState);
  console.log(initialState);
  
  const handleClick = () => {
  dispatch({type: 'ok'});
  }


  return (
    <>
    <div className="headingContainer">
      <h2 className="heading" onClick={handleClick}> {initialState.applicationName} </h2>         
    </div>
    </>
  );
} 

export default Heading;