import React from 'react';
import Nflix from './Nflix';
import Amazon from './Amazon';


// Using if else condition to show the Component
const favSeries = 'Netflix';
// const Fav = () => {
//     if(favSeries === 'Netflix'){
//         return <Nflix />
//     }else {
//         return <Amazon />
//     }
// }


const App = () => {
  return (
    <>
    {/* COMPONENT WAY WITH IF ELSE CONDITION */}
    {/* <Fav /> */}

    {/* OR */}

    {/* TERNARY OPERATOR DIRECT WAY */}
    {favSeries === 'Netflix' ? <Nflix/> : <Amazon/>}
    </>
  )
}

export default App