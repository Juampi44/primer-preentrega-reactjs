import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import LandingPage from './componentes/LandingPage/LandingPage.js'

// import { getOwnPropertySymbols } from 'core-js/core/object';

function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
           <Routes>   
           {/* <Route></Route> */}
           {/* <div className="container-app"> */}
           <Route path='/' element={<LandingPage />}   />
          <Route path='/items' element={<ItemListContainer />}   />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} / >  
          <Route path='/category/:id' element={<ItemListContainer />} / >  
            
         {/*  </div> */}
           
          
        </Routes>
      
    </BrowserRouter>
  );
}




{/* function SuperButton ({saludo}) {
  return (<button>{saludo}</button>)

}

function SuperForm (props) {
  console.log(props)
  return(<>
<h1>{props.title}</h1>
{props.childrenbutton({saludo: "hola"})}
  </>)
} */}

{/* export default function App() {
  return (
    <div>
    <SuperForm title = "HEy" childrenbutton={SuperButton}/>
    </div>
  );
} */}


{/* // function App() {
//   return (
//     <div className="App">
//         <NavBar/>
//         <ItemListContainer greeting={"Pagina proyecto"}/>
//     </div>
//   );
// } */}

export default App;
