import { useState } from "react";

const GeneratorBox = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);
  
  const boxWidth = 100; 
  const boxHeight = 100; 

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      color: color,
      width: boxWidth,
      height: boxHeight,
    };
    setBoxes([...boxes, newBox]);
    setColor("");
  };
  return (
    <div className="box-creator">
    
      <form onSubmit={handleSubmit}>
       
        <label>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)} 
          placeholder="Enter a color "
        />

       
        <button type="submit">Add Box</button>
      </form>

     
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index} 
            className="box"
            style={{
              backgroundColor: box.color,
              width: `${box.width}px`, 
              height: `${box.height}px`, 
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GeneratorBox;
