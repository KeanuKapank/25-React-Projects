import React, { useState } from "react";
import "./style.css";

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, index) => (
          <div
            key={index}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${
              currentTabIndex === index ? "active" : "inactive"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
