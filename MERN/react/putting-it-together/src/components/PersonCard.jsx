
import React from "react";
function PersonCard(props) {
    
    const [age, setAge] = React.useState(props.age);
    return (
      <>
        <div>
          <h2>
            {props.firstname},{props.lastname}
          </h2>
          <p> Age : {age}</p>
          <p> hair color : {props.hairColor} </p>
        </div>
        <button onClick={() => setAge(age + 1)}>
          birthday button for {props.firstname},{props.lastname}
        </button>
      </>
    );
  }
  
  export default PersonCard;