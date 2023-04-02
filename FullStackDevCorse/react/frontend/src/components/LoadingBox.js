import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingBox() {
    return (
        <Spinner animation='border' role='status' variant='primery'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    )
}

export default LoadingBox