import React from "react";
import error404 from '../assets/error404.jpg'
//in case the user enters an invalid page URL.
const Error404 = () => {
    return ( 
        <img src={error404} alt='error404' className='error404'/>
     );
}
 
export default Error404;