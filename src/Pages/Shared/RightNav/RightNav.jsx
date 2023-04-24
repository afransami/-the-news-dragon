import React from 'react';
import { Button } from 'react-bootstrap';
import {FaGithub, FaGoogle} from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold mt-3'>Login With</h4>                    
            <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub/> Login with Github</Button>            
        </div>
    );
};

export default RightNav;