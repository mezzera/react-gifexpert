import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
     setInputValue(e.target.value);
    
  };

   const handleSubmit = (e) => {
    e.preventDefault(); // evita que la pagina se refresque cuando se mande el formulario
    
 
  if (inputValue.trim().length > 2 ) {
    setCategories((categories) => [inputValue, ...categories, ]);
    setInputValue('')
  };


  }   
  
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
   
  );
};



AddCategory.propTypes = {
 
  setCategories : PropTypes.func.isRequired


 }

//C:\Users\Usuario\Desktop\Programacion\React\GifExpertApp\gif-expert-app

export default AddCategory;