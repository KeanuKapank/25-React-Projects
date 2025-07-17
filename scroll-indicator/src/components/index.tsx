import React, { useEffect, useState } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setSCrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", HandleScrollIndicator);
  }, []);

  function HandleScrollIndicator() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolledFromTop = document.documentElement.scrollTop;
    console.log("How Much Scrolled From Top: ", howMuchScrolledFromTop);
    const remainingHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log("Scroll Height: ", document.documentElement.scrollHeight);
    console.log("Client Height: ", document.documentElement.clientHeight);
    setSCrollPercentage((howMuchScrolledFromTop / remainingHeight) * 100);
  }
  console.log(scrollPercentage);
  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      const products = data.products;
      setData(products);
      console.log(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            style={{
              width: `${scrollPercentage}%`,
            }}
            className="current-progress-bar"
          ></div>
        </div>
      </div>

      <div>
        {loading ? (
          <p>Loading ...</p>
        ) : data && data.length > 0 ? (
          <div className="dataContainer">
            {data.map((item) => (
              <h4>{item.title}</h4>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ScrollIndicator;
