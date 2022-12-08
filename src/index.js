import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import findPollyFill from 'core-js-pure/actual/array/find'

// const array1 = [5, 12, 8, 130, 44];

// let find = array1.findPollyFill(
//   (element) => element > 10
// );

// console.log(find)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// let arr = [1,2,3];
// let arr2 = [4,5];


/* esto es concatenar un array */
// const concat = arr.concat(arr2);
  /* ese de arriba y el de abajo son iguales */
// const concat = (arr = [...arr, ...arr2]);
// console.log(concat);


/* para clonar un array se hace esto */

// let copyArr = arr; /* no clona, solo hace una referencia al original */
// copyArr.push(4);

// const copyArrSpreadOP = [...arr]
// copyArrSpreadOP.push(4)
// console.log(arr);


/* Expandir un array se hace asi: */

// const copyArrSpreadOPExp = [arr, 4];
// console.log(copyArrSpreadOPExp);

/* funciones matematicas: */

// const min = Math.min(...arr);
// console.log(min)

// const max = Math.max(...arr , ...arr2);
// console.log(max)


/* operador de propagacion con objetos: */

// const usuario = {
//   name: "Felipe" ,
//   edad: 25 ,
// }

// const alumno = {
//   clase: "reactjs",
//   promedio: 5
// }

// const alumnoCh = {...usuario , ...alumno, idCh: 12};
// console.log(alumnoCh);

/* Propiedades dinamicas: */ /* en esta sume los nombres de la lista */

// const obUsuarios = {
//   usuario_5: "david"
// }
// const nombres = ["jon" , "irma" , "miguel" , "sara"]

// nombres.forEach(
//   (nombre , index) => (
//     obUsuarios[`usuario_${index}`] = nombre
//   )
// )
// console.log(obUsuarios);



/* DEEP MATCHING: */

// const usuario = {
//   name: "Felipe" ,
//   edad: 25 ,
// }

// let {name , edad} = usuario;
// console.log(name , edad);


/*  asignacion en desestructuracion */

// let persona = ["jon" , "smith"];
// let [nombre , apellido] = persona;

// let [nombre , apellido] = "jons smiths".split(" ")
// console.log(nombre , apellido);

