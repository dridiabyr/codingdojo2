import { useState } from "react";

const GeneratorBox = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState({ width: "", height: "" });
  const [boxes, setBoxes] = useState([]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      color: color,
      width: size.width,
      height: size.height,
    };
    setBoxes([...boxes, newBox]);
    setColor("");
  };
  return (
    <div className="box-creator">
      <form onSubmit={handleSubmit}>
        <label> Color : </label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <label>Width:</label>
        <input
          type="number"
          value={size.width}
          onChange={(e) => setSize({ ...size, width: e.target.value })}
        />
        <label>heigth:</label>
        <input
          type="number"
          value={size.height}
          onChange={(e) => setSize({ ...size, height: e.target.value })}
        />
        <button type="submit"> Add </button>
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
