import React from 'react';
import Card from './Card';
import sdata from './Seriesdata';

const Amazon = () => {
  return (
    <>
      <Card
      key={sdata[0].id}
      imgsrc={sdata[0].imgsrc}
      category={sdata[0].category}
      sname={sdata[0].sname}
      slink={sdata[0].slink}
      />
    </>
  )
}

export default Amazon