import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import sdata from './Seriesdata';


// console.log(sdata[0]);

function ncardMap(val, ind){
  console.log(val, ind)
  return(
    <Card
    key={val.id}
    imgsrc={val.imgsrc}
    category={val.category}
    sname={val.sname}
    slink={val.slink}
    />
  );
}

let headingName = 'Top Ten Series';

ReactDOM.render(
  <>
  <h1 className='heading'>Top Netflix Series</h1>
 
  {/* Created a FUNCTION on line #10 and calling it 
  on a MAP FUNCTION in a render method */}
  {sdata.map((ncardMap))}

  {/* Directly created a MAP FUNCTION in a render method*/}
  {sdata.map((v, index) => {
    // console.log(index);
    return(
      <Card
      key={v.id}
      imgsrc = {v.imgsrc}
      category = {v.category}
      sname = {v.sname}
      slink = {v.slink}
      />
    )
  })}


  {/* Manual Card props add */}
  {/* <Card
  imgsrc='https://w0.peakpx.com/wallpaper/36/1012/HD-wallpaper-rick-grimes-the-walking-dead.jpg'
  category="Amazon Original Series"
  sname="Walking Dead"
  slink="https://www.netflix.com/pk/"
  /> */}

  {/* Card props add from Sdata Array */}
  {/* <Card
  imgsrc={sdata[1].abc}
  category={sdata[1].category}
  sname={sdata[1].sname}
  slink={sdata[1].slink}
  />

  <Card
  imgsrc={sdata[2].imgsrc}
  category={sdata[2].category}
  sname={sdata[2].sname}
  slink={sdata[2].slink}  /> */}
  </>,
  document.getElementById('main')
);