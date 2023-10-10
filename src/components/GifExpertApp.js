import useFetchGifs from "../hooks/useFetchGifs";
import AddCategory from "./AddCategory";
import React from "react";
import GifGrid from "./GifGrid";
import { useState } from "react";

export const GifExpertApp = () => {
   
 
    const [categories, setCategories]  = useState (['One Punch'])
    

//    const handleAdd = () => {
//    setCategories ([...categories, 'Hunter X Hunter'])  //de esta forma, agarramos del arreglo anterior, y le sumamos el nuevo arreglo
//    }
    // setCategories([...categories, 'Hunter x Hunter'])
   
 return (
      <>
      
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr />
       
{/* 
        <button onClick={handleAdd}>Agregar</button> */}

       <ol> 
        { 
           categories.map(category => ( 
            // <li key = {category}> {category} </li>   //el key no puede ser el indice
              

              <GifGrid 
              key = {category}
              category={ category}
              />
           ))
        }
       </ol>
    
      </>
    );
  };
  
