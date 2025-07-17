import React from "react";
import Tabs from "./Tabs";

function RandomComponent() {
  return <div>Some Random Content</div>;
}

const TabsTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  return <Tabs tabsContent={tabs} />;
};

export default TabsTest;
