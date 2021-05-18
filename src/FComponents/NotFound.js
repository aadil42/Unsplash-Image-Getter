import { MdSentimentVeryDissatisfied } from 'react-icons/md';

const NotFound = ({initialState}) => {

  const {curruntQuery} = initialState;

  return(
    <>
    <MdSentimentVeryDissatisfied className="notFoundIcon" />
    <h1 className="notFoundErrorMassage">sorry can't found anyhting with
     <span className="WrongQuery">{curruntQuery}</span> </h1>
    </>
  );
}

export default NotFound;