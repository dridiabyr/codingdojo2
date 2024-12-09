import { useParams } from "react-router-dom";
const Number = () => {
  const { number } = useParams();
  return (
    <div>
      <h1>This Number is: {number}</h1>{" "}
    </div>
  );
};

export default Number;
