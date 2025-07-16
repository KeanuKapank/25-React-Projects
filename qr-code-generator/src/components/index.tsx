import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  function HandleClearInput() {
    setInput("");
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter Your Value Here"
          value={input}
          onChange={(e) => {
            setQrCode(e.target.value);
            setInput(e.target.value);
          }}
        />
        <button
          onClick={HandleClearInput}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Clear Input
        </button>
        <div>
          <QRCode value={qrCode} id="qr-code-value" bgColor="white" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
