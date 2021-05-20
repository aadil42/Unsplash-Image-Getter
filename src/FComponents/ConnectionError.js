import { RiSignalWifiErrorFill } from 'react-icons/ri';

const ConnectionError = () => {

  return (
    <> 
      <RiSignalWifiErrorFill className="connecitonErrorIcon" />    
      <h1 className="connectionErrorMassage"> Your Internet Connection Sucks </h1>
    </>
  );
}

export default ConnectionError;