import { useEffect } from 'react';




const ImageLayout = ({dispatch, initialState}) => {

const { 
  checkFetchedImages, 
  rendering_initially, 
  Action, ApiUrl, 
  client_id, 
  imagesArr,
  query } = initialState;


// fetches images initially when component renders
useEffect(() => {

  async function fetchImages() {
    if(rendering_initially) {
      let response = await fetch(ApiUrl.concat(query.concat(client_id)));
      response = await response.json();
      checkFetchedImages(Action.RENDER_INITIALLY, response, dispatch);  
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
        <img src={element.urls.regular} alt="unsplashImage"/>
        </a>
        </>
      ); 
    })}
  </div>
 </> 
 );
}

export default ImageLayout;