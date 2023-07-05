import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// function test1(){
//   for (let index = 0; index < 1; index++) {
//      console.log('test1');
//   }
// }

// function test2(){
//   for (let index = 0; index < 1000; index++) {
//     console.log('test2');
//   }
// }

// function test3(){
//   for (let index = 0; index < 100000; index++) {
//     console.log('test3');
//   }
// }

// test1()
// test2()
// test3()

// const a1 = new Promise(test);
// const a2 = new Promise(test2);

// function test2(resolve,reject){
//   console.log('test2');
//   for (let index = 0; index < 0; index++) {}
//   resolve('tugadi a2');
// }

// function test(resolve,reject){
//   console.log('test1');
//   for (let index = 0; index < 0; index++) {}
//   resolve('tugadi a1')
// }

// a1.then((response) => {
//   console.log(response);
// });

// a2.then((response)=> {
//   console.log(response);
// });


// function test(){
//   const a = new Promise((resolve)=>{
//     for (let index = 0; index < 10000; index++) {
//       resolve()
//     }
//   })

//   a.then(res=>{
//     console.log('tugadi');
//   })

// }

// for (let index = 0; index < 100; index++) {
//   test()
// }

// async function getBackEnd(){
//   const a = await new Promise((resolve)=>{
//     for (let index = 0; index < 100000; index++) {

//     }
//     resolve('tugadi')
//   })

//   console.log(a);
//   return a

// }

// for (let index = 0; index < 100; index++) {
//   getBackEnd()
// }

// console.log(1);