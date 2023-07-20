import React, { useState } from "react";

export default function Accordion({ serial, faq }) {
  const [open, setOpen] = useState(false);
  let answerStyle = !open ? { display: "none" } : { display: "block" };

  return (
    <>
      <div
        className="accordion"
        style={!open ? { border: "none" } : { borderTop: "solid 4px #087f5b" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className="serial"
          style={!open ? { color: "#868e96" } : { color: "#087f5b" }}
        >
          {serial < 10 ? `0${serial}` : serial}
        </div>
        <div class="sub-container">
          <p
            class="question"
            style={!open ? { color: "#343a40" } : { color: "#087f5b" }}
          >
            {faq.title}
          </p>
          <p class="button">{open ? "-" : "+"}</p>
          <p class="answer" style={answerStyle}>
            {faq.text}
          </p>
        </div>
      </div>
    </>
  );
}
