import { useEffect } from 'react';




const ImageLayout = ({dispatch, initialState}) => {

const { 
  checkFetchedImages, 
  rendering_initially, 
  Action, ApiUrl, 
  client_id, 
  imagesArr,
  Defaultquery,
  per_page,
  currunt_page } = initialState;


// fetches images initially when component renders
useEffect(() => {

  async function fetchImages() {
    if(rendering_initially) {

      try {
        let response = await fetch(ApiUrl.concat(Defaultquery.concat(`&page=${currunt_page}&per_page=${per_page}`).concat(client_id)));
        response = await response.json();
        console.log(response);
        checkFetchedImages(Action.RENDER_INITIALLY, response, dispatch);  
      } catch(e) {

        console.log(e);
        dispatch({type: Action.NETWORK_ERROR})
      }
    }
  }

fetchImages();

}, []);



return (
  <>
   <div className="ImagesContainer">
    {imagesArr.map((element, index) => {
      return(
        <> 
        <a key={index} href={element.links.html} target="_blank">
        <img src={element.urls.regular} alt={element.alt_description}/>
        </a>
        </>
      ); 
    })}
  </div>
 </> 
 );
}

export default ImageLayout;