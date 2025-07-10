import { useState } from "react";
import reactQuestions from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState<number[]>([]);

  function handleSingleSelection(id: number) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {reactQuestions && reactQuestions.length > 0 ? (
          reactQuestions.map((item) => (
            <div
              onClick={() => handleSingleSelection(item.id)}
              className="item"
            >
              <div className="title">
                <h3>{item.question}</h3>
                <div className="toggleIcon">
                  {selected.includes(item.id) ? <span>-</span> : <span>+</span>}
                </div>
              </div>
              {selected.includes(item.id) ? (
                <p className="content">{item.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <h1>No questions Available</h1>
        )}
      </div>
    </div>
  );
}
