import './cards.css';


function Cards() {
    return(
        <div className="cards_container">
<div class="container page-wrapper">  
  <div class="page-inner">  
   <div class="row">  
    <div class="el-wrapper">  
     <div class="box-up">  
      <div><img class="img" img src="primer-proyecto\src\components\media\ktm.jpeg" alt=""/></div>
      <div class="img-info">  
       <div class="info-inner">  
        <span class="p-name">Indumentaria</span>  
        <span class="p-company">Campera</span>  
       </div>  
       <div class="a-size">Precios:<span class="size">$5000</span></div>  
      </div>  
     </div>  
     <div class="box-down">  
      <div class="h-bg">  
       <div class="h-bg-inner"></div>  
      </div>  
      <a class="cart" href="#">  
       <span class="price"></span>  
       <span class="add-to-cart">  
        <span class="txt">Añadir al carrito</span>  
       </span>  
      </a>  
     </div>  
    </div>  
   </div>  
  </div>  
 </div>
        </div>
    ) 
};

export default Cards;