import React from 'react';
import { Image } from 'react-bootstrap';
import notfound from '../../images/download.png';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Image height="100" src={notfound} fluid />
        </div>
    );
};

export default NotFound;