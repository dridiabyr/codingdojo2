

// eslint-disable-next-line react/prop-types
const PersonCard = ({ firstname, lastname, age, hairColor }) => {
  return (
    <div className="person">
      <h2>{firstname}, {lastname} </h2>
      <p> Age : {age} </p>
      <p> Hair color : {hairColor} </p>
    </div>
  );
};

export default PersonCard;