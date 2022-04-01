import React from "react";

function Snackbar({ visible }) {
  const isVisible = (visible) => {
    if (visible) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };

  return (
    <div className="snack" style={isVisible(visible)}>
      <strong> Added a pokemon</strong>
    </div>
  );
}

export default Snackbar;
