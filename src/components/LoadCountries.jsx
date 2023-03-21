import React, { useState } from 'react'
import {Button} from 'reactstrap'

 function LoadCountries({countries}) {
  const [visibleData, setVisibleData] = useState(countries.slice(0, 10))
  const [showAll, setShowAll] = useState(false)
//  console.log(visibleData);



  const loadMore = () => {
    const newBatch = countries.slice(visibleData.length, visibleData.length + 10)

    setVisibleData((prevData) => [...prevData, ...newBatch]);
   // setShowAll(false)
  };

  const loadAll = () => {
    setVisibleData(countries)
    setShowAll(true);
  };

  //const show

  const loadLess = () => {
    setVisibleData(countries.slice(0, 10));
     setShowAll(false);
  };
  

  return (
    <div className="container">
      <h2>Visiting every country of the world</h2>
      <ul className="row">
        {visibleData.map((item, i) => {
          // console.log(item)
          return (
            <li key={item.cca2} className="col-12 col-sm-4 col-lg-3">
              <h2 className="text-red">{i} </h2>
            </li>
          );
        })}
      </ul>
      <div className="btn-group">
        {!showAll && (
          <Button onClick={loadMore} color="success">
            Load More
          </Button>
        )}
        {!showAll && (
          <Button onClick={loadAll} color="danger">
            Load All
          </Button>
        )}
        {showAll && (
          <Button onClick={loadLess} color="warning">
            Load Less
          </Button>
        )}
      </div>
    </div>
  );
}

export default LoadCountries
