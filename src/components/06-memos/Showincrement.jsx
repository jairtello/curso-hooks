import React from "react";

const Showincrement = React.memo(({ increment }) => {
  console.log("Me volví a genrar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

export default Showincrement;
