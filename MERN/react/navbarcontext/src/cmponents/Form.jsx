import { useContext } from "react";

import NameContext from "./NameContext";

const Form = () => {
  const { name, setName } = useContext(NameContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name..."
      />
    </div>
  );
};

export default Form;
