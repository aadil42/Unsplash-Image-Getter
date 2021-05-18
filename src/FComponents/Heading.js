
const Heading = ({initialState}) => {

  const { applicationName } = initialState;
  return (
    <>
    <div className="headingContainer">
      <h2 className="heading"> {applicationName} </h2>         
    </div>
    </>
  );
} 

export default Heading;