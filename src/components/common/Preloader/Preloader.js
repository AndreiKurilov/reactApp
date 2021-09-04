import React from 'react';
import preloader from '../../../assets/images/preloader.gif'

let Preloader = (props) => {
  return <div>
    <img src={preloader} alt='preloader' style={ {height:'100px' } } />
    </div>
}

export default Preloader;
