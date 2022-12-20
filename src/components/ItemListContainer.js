import Cards from './Cards';
import './ItemListContainer.css';
import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import { arrayProductos } from "../arrayproductos/data.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router";


const ItemListContainer = () => {

    const { id } = useParams()
  

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getsProductsPromise
        .then((arrayp) => setProductos(arrayp)) 
        .catch((err) => console.log(err));
  

    }, [id]);
  
    
  
    const getsProductsPromise = new Promise((res, rej) => {
      setTimeout(() => {
        if(id){
          const productosFiltrados = arrayProductos.filter(e => e.category === id)
          res(productosFiltrados);
        }  
        res(arrayProductos)
        
      }, 2000);
    });
  
    return (
      <>
        <div className="container">
          <h1 style={{ textAlign: "center" }}> PRODUCTOS DESTACADOS </h1>
          <ItemList 
            items={productos}
          />
        </div>
      </>
    );
  };



// function ItemListContainer({greeting}) {
//     return(
//         <div classname="home_container">
//             <h1>{greeting}</h1>
//             <Cards/>
//             <Cards/>
//         </div>
//     ); 
// }


export default ItemListContainer;