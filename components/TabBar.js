import React, { useState } from "react";
import style from "../styles/Brand.module.css";

const TabBar = ({ names, images ,onTabClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabClick(index);
  };

  return (
    <div className={style.tabbarmain}>
      {names.map((name, index) => (
        <div
          className={style.tabhover}
          key={index}
          onClick={() => handleTabClick(index)}
          style={{
            fontWeight: activeTab === index ? "bold" : "normal",
            color: activeTab === index ? "blue" : "black",
            borderBottom: activeTab === index ? "5px solid blue" : "black",
          }}
        >
          <span style={{ display: "block" }}>
            <img src={images[index]} height={15} alt={`Image ${index}`} />
          </span>
          {name}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
