const NumericPageButtons = ({initialState, dispatch}) => {

  const { total_pages } = initialState;

  // total_pages.map((element, index) => {
  //   return (
  //    <span class="page-buttons"> {index} </span> 
  //   );
  // });

const filledArr = [];
for(let i = 0; i< 10; i++) {

  filledArr.push(i);
}

return(
  <>
  {filledArr.map((element, index) => {
    return(
      <span className="page-buttons">{index + 1}</span>
    )
  })}
</>
);


  // total_p.push
  // for(let i = 0; i < total_pages; i++) {
  //   return(
  //     <span class="page-buttons">{i}</span>
    // )
  // }

}

export default NumericPageButtons;