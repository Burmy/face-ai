import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f2'>
                {'This Magic Brain will detect faces from any Image. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 shadow-5'>
                    <input className='input f4 ps2 w-70 center' type='tex' placeholder="Enter Image URL..." onChange={onInputChange} />
                    <button className='btn w-30 f4 link pv2 ' onClick={onButtonSubmit} > <span> Detect </span></button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;