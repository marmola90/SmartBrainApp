import React from 'react';
import './ImageLinkForm.css';

<<<<<<< HEAD
const ImageLinkForm = ({onInputChange}) =>{
=======
const ImageLinkForm = ({ onInputChange,onButtonSubmit }) =>{
>>>>>>> 0911263eabbd41a7ca0f952153a53e0da0ad87aa
    return(
        <div>
            <p className='f3 white textshadow'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
<<<<<<< HEAD
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-orange'>Detect</button>
=======
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-orange'
                        onClick={onButtonSubmit}
                    >Detect</button>
>>>>>>> 0911263eabbd41a7ca0f952153a53e0da0ad87aa
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;