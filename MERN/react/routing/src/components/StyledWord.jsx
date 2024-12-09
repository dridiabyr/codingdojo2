import { useParams } from "react-router-dom";

function StyledWord() {
  const { word, backgroundColor, textColor } = useParams();
  const styles = {
    backgroundColor: backgroundColor || "transparent",
    color: textColor || "black",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={styles}>
      <h1>The word is: {word}</h1>
    </div>
  );
}

export default StyledWord;
