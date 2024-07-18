import React from "react";

function SuccessScreen(props) {
  const { data } = props;
  return (
    <div>
      <h3>Well come {data.username}</h3>
    </div>
  );
}

export default SuccessScreen;
