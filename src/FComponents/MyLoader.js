import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core';

// loading style
const loadingStyle = css`
display: block;
margin: auto;
margin-top: 9rem;
`

const MyLoader = () => {

  return (
    <BounceLoader size={150} css={loadingStyle}/>
  )
}

export default MyLoader;