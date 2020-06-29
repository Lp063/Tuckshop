import React from 'react'
import { Spinner } from 'react-bootstrap';

function LoadingAnimation(){

    return <Spinner animation="border" variant="secondary" role="status" style={{margin:"auto"}}><span className="sr-only">Loading...</span></Spinner>;
}

export default LoadingAnimation;