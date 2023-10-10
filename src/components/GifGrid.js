 import React from 'react';
 import { GifGridItems } from './GifGridItems';
import { getGifs } from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';



export const GifGrid = ({  category }) => {
      

const {data, loading} = useFetchGifs(category);
console.log(loading)

// const [images, setImages] = useState([])

//  useEffect(() => {
//   getGifs(category)
//   .then (imgs => setImages (imgs))           // lee todo el codigo del componente cuando es renderizado  por primera vez . evita caer en el bucle infinito
//  }, [category] )




  return (
    <>
    <h3> {category}</h3>
           
           {loading && <p>Loading</p>   }

     <div className = "card-grid">
     
  
      {
        data.map(  img => (
          <GifGridItems
          key = {img.id}
          { ...img }  // sirve para pasar las propiedades del img como propiedades individuales al gifgriditems
          
          />
        ))
          
        
        }
     
    </div> 
    </>
  )
}


export default GifGrid





















// return (
//   <div>
//     <h3> {category}</h3>
   
//     {
//       images.map(  ({id,title,url}) => (
//         <li key ={id}> {title}</li>
        
       
//       ))
//       }
   
//   </div>
// )

