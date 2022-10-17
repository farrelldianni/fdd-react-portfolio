import React from 'react';
import linkedin from '../../Assets/logos/linkedin.png';
import instagram from '../../Assets/logos/instagram.png';
import github from '../../Assets/logos/github.png';

function Footer() {
    return(
        <div className='bg-dark d-flex justify-content-center fixed-bottom m-10'>
        <a href='https://github.com/farrelldianni/' target='_blank' rel='noreferrer'>
            <img className='my-10' src={github} alt='GitHub logo' height='64px'></img>
        </a>
        <a  href='https://github.com/farrelldianni/' target='_blank' rel='noreferrer'>
            <img className='my-10 ml-2' src={linkedin} alt='LinkedIn logo' height='64px'></img>
        </a>
        <a href='https://github.com/farrelldianni/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='Instagram logo' height='64px'></img>
        </a>
    </div>
    )
}

export default Footer;