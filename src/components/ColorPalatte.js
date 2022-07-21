import React from "react";

export default function ColorPalatte(props) {
  const [isCopied, setIsCopied] = React.useState(false);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const hexColor = rgbToHex(...props.color);

  function copyToClipboard() {
    navigator.clipboard.writeText(hexColor);
    setIsCopied(true);
  }

  const styles = {
    backgroundColor: hexColor,
    color: props.index > 10 ? "white" : "black",
  };

  return (
    <div className="color--palatte" style={styles} onClick={copyToClipboard}>
      <h4>{props.weight}%</h4>
      {isCopied && <p className="copy">Copied to clipboard</p>}
      <h4>{hexColor}</h4>
    </div>
  );
}
