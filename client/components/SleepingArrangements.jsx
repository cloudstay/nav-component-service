import React from 'react';

const SleepingArrangements = function(props) {
  let sleepingArrangements = props.sleepingArrangements;
  console.log(sleepingArrangements)
  return (
    <div className="main">
      <div className="title">Sleeping arrangements</div>
        <div className="container">
          {/* {sleep_arrangement && sleep_arrangement.map( (item, index) =>  */}
            <div className="box">
              {/* <img src={beds} className={icon} /> */}
              {/* <div className="type">{item === 'sofa bed' ? 'Common spaces' : `Bedroom ${titleIcons[2].label}`}</div> */}
              {/* <div className={bed}>{item}</div> */}
            </div>
          {/* )} */}
        </div>
    </div>
  )
}

export default SleepingArrangements;
