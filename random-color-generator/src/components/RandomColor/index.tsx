import { useState } from "react";
import "./style.css";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function HandleGenerateRandomColor(typeOfColor: string) {
    if (typeOfColor === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }

      setColor(hexColor);
    } else if (typeOfColor === "rgb") {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);

      setColor(`rgb(${r},${g},${b})`);
    }
  }
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={() => HandleGenerateRandomColor(typeOfColor)}>
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h3>
          {typeOfColor === "rgb" ? (
            <span>{typeOfColor}</span>
          ) : (
            <span>{typeOfColor}</span>
          )}
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
