import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className=' mb-2 px-lg-3'><FaGoogle className='mb-1'></FaGoogle> Log in with Google</Button>
                <Button variant="outline-secondary" className=''> <FaGithub className='m-1'></FaGithub> Log in with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Stay with us</h5>
                <ButtonGroup vertical>
                    <Button variant="outline-secondary" className='mb-2 px-lg-5'> <FaFacebook className='mb-1'></FaFacebook> Facebook</Button>
                    <Button variant="outline-secondary" className='mb-2 px-lg-5'> <FaTwitter className='mb-1'></FaTwitter> Twitter</Button>
                    <Button variant="outline-secondary" className='mb-2 px-lg-5'> <FaDiscord className='mb-1'></FaDiscord> Discord</Button>
                    <Button variant="outline-secondary" className='mb-2 px-lg-5'> <FaInstagram className='mb-1'></FaInstagram> Instagram</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default RightSideNav;