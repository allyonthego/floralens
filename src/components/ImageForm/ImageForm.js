import React from 'react';
import './ImageForm.css';

const ImageForm = ({ onInputChange, onPictureSubmit }) => {
  console.log('ImageForm');
  return (
    <div>
      <div className='f5'>
        <p>{'Photo Link'}</p>
      </div>
      <div className='f6 center dark-gray b--black mv2 w-100 w-50-m w-25-l mw5 center'>
        <input 
          className="pa1 input-reset ba bg-transparent hover-bg-black hover-white"
          type='text' onChange={onInputChange}/>
        <button 
          className="ph2 pv1 input-reset ba b--black bg-transparent grow pointer dib"
          onClick={onPictureSubmit}>{'Guess'}</button>
      </div>
    </div>
  );
}

export default ImageForm;