import Cards from './Cards';
import './ItemListContainer.css';


function ItemListContainer({greeting}) {
    return(
        <div classname="home_container">
            <h1>{greeting}</h1>
            <Cards/>
            <Cards/>
        </div>
    ); 
}


export default ItemListContainer;