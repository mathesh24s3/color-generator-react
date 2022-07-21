import React from "react";

export default function Navbar(props) {

    const [hoverEffect , setHoverEffect] = React.useState(false)

  const styles = {
    input: {
      borderColor: props.color,
    },
    button: {
      backgroundColor: props.color,
    },
  };

  return (
    <header className="App-header">
      <h1 className="header--title" onMouseOver={()=> setHoverEffect(true)} onMouseOut={()=> setHoverEffect(false)} onClick={props.generateRandomColor}>Color Generator</h1>
      {hoverEffect && <p>Generate random color</p>}
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="color"
          placeholder={props.color}
          autoComplete="off"
          className="color--input"
          onChange={props.handleChange}
          style={styles.input}
          value={props.color}
        />
        <button className="btn" style={styles.button}>
          Submit
        </button>
      </form>
      {props.error && <p className="error">Invalid Color</p>}
    </header>
  );
}
