import React from "react";
import { string } from "prop-types";

const GlitchText = ({ text }) => {
  return (
    <div className="glitchText">
      <h1 className="glitchChild">{text}</h1>
      <h1 className="glitchChild">{text}</h1>
      <h1 className="glitchChild">{text}</h1>
      <h1 className="glitchChild">{text}</h1>
      <h1 className="glitchChild">{text}</h1>
    </div>
  );
};

GlitchText.propTypes = {
  text: string.isRequired,
};

export default GlitchText;
