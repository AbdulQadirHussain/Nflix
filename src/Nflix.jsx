import React from 'react';
import Card from './Card';
import sdata from './Seriesdata';

const Nflix = () => {
  return (
    <>
      <Card
      key={sdata[1].id}
      imgsrc={sdata[1].imgsrc}
      category={sdata[1].category}
      sname={sdata[1].sname}
      slink={sdata[1].slink}
      />
    </>
  )
}

export default Nflix