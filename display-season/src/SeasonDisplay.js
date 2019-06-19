import React from 'react';
import './SeasonDisplay.css';

//Extracting Options to Config Objects
//Any change on the text or icon can be done in this config object
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake"
  }
};//the summer and winter objects should use the same name as the string returned from getSeason()
//case-sensitive

const getSeason = (lat, month) => {
    if(month>2 && month<9) {
      return lat>0 ? 'summer' : 'winter';
    }
    else {
      return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    // Too redundant. Use "Extracting Options to Config Objects"
    // const text = (season==="winter" ? "Burr, it is chilly":"Let's hit the beach");
    // const icon = season ==="winter" ? "snowflake":"sun";
    const {text, iconName} = seasonConfig[season] //get the object, summer or winter object, and destructure

    return (
      <div className={`season-display ${season}`}>
        {/* <i className={`${icon} icon`} /> */}
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        {/* <i className={`${icon} icon`} /> */}
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
}

export default SeasonDisplay;