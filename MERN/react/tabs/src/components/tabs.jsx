import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [selectedCase, setSelectedCase] = useState(0);

  const handleClick = (index) => {
    setSelectedCase(index);
   
  };

  return (
    <div>
   
    <div className="tab-headers">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={index === selectedCase ? "active" : ""}
        >
          {tab.label}
        </button>
      ))}
    </div>


    <div className="tab-content">

      {tabs[selectedCase] && tabs[selectedCase].content}
    </div>
  </div>
  );
};

export default Tabs;
